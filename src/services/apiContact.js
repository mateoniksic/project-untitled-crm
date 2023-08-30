import supabase, { supabaseUrl } from './supabase';
import { PAGE_SIZE } from '../utils/constants';

export async function getContacts({ workspaceId, page, search }) {
  let query = supabase
    .from('contact')
    .select(
      `*, 
    user_profile(*)`,
      { count: 'exact' },
    )
    .eq('workspace_id', workspaceId);

  if (search) {
    query = query.or(
      `contact_first_name.ilike.%${search}%,contact_last_name.ilike.%${search}%`,
    );
  }

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from - 1 + PAGE_SIZE;
    query = query.range(from, to);
  }

  query = query.order('contact_id', { ascending: false });

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching contacts data.');
  }

  return { data, count };
}

export async function getContact({ contactId, workspaceId }) {
  const { data, error } = await supabase
    .from('contact')
    .select(
      `*, 
    user_profile(*)`,
    )
    .eq('contact_id', contactId)
    .eq('workspace_id', workspaceId)
    .single();

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching contact data.');
  }

  return data;
}

export async function getContactDeals({ contactId }) {
  const { data, error } = await supabase
    .from('deal')
    .select(
      `*, 
    contact(contact_first_name, contact_last_name, contact_email),
    deal_status(deal_status_name),
    pipeline(pipeline_name),
    pipeline_stage(pipeline_stage_name)`,
    )
    .eq('contact_id', contactId)
    .order('deal_created_at', { ascending: false });

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching deals data.');
  }

  return data;
}

export async function updateContact({ contact }) {
  // 1. Check and set avatar
  const avatar = contact.contact_avatar
    ? typeof contact.contact_avatar === 'string'
      ? contact.contact_avatar
      : contact.contact_avatar[0]
    : null;

  const avatarFile = avatar instanceof File && avatar;

  let avatarFileName = '';
  let avatarUrlPath = '';

  if (avatar && avatarFile) {
    avatarFileName = `${avatar?.name}-${crypto.randomUUID()}`.replaceAll(
      '/',
      '',
    );

    avatarUrlPath = avatar?.startsWith?.(supabaseUrl)
      ? avatar
      : `${supabaseUrl}/storage/v1/object/public/avatars/${avatarFileName}`;
  } else if (avatar) {
    avatarUrlPath = avatar;
  } else {
    avatarUrlPath = null;
  }

  // 2. Run query
  const { data, error } = await supabase
    .from('contact')
    .update({ ...contact, contact_avatar: avatarUrlPath })
    .eq('contact_id', contact.contact_id)
    .select()
    .single();

  if (error) {
    throw new Error(
      `There was a problem while updating a contact (${[
        contact.contact_first_name,
        contact.contact_last_name,
      ].join(' ')}).`,
    );
  }

  // 3. Upload avatar image in storage bucket if there's a new file.
  if (avatarFile) {
    const { error: storageError } = await supabase.storage
      .from('avatars')
      .upload(avatarFileName, avatarFile);

    if (storageError) {
      await supabase.from('contact').delete().eq('contact_id', data.contact_id);
      console.log(storageError);
      throw new Error(
        'There was a problem while uploading avatar image. Contact was not created or updated.',
      );
    }
  }

  return data;
}

export async function createContact({ contact }) {
  // 1. Check and set avatar
  const avatar = contact.contact_avatar
    ? typeof contact.contact_avatar === 'string'
      ? contact.contact_avatar
      : contact.contact_avatar[0]
    : null;

  const avatarFile = avatar instanceof File && avatar;

  let avatarFileName = '';
  let avatarUrlPath = '';

  if (avatar && avatarFile) {
    avatarFileName = `${avatar?.name}-${crypto.randomUUID()}`.replaceAll(
      '/',
      '',
    );

    avatarUrlPath = avatar?.startsWith?.(supabaseUrl)
      ? avatar
      : `${supabaseUrl}/storage/v1/object/public/avatars/${avatarFileName}`;
  } else if (avatar) {
    avatarUrlPath = avatar;
  } else {
    avatarUrlPath = null;
  }

  // 3. Run query
  const { data, error } = await supabase
    .from('contact')
    .insert([{ ...contact, contact_avatar: avatarUrlPath }])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error(
      `There was a problem while creating a new contact (${[
        contact.contact_first_name,
        contact.contact_last_name,
      ].join(' ')}).`,
    );
  }

  // 4. Upload avatar image in storage bucket.
  if (avatarFile) {
    const { data: storageData, error: storageError } = await supabase.storage
      .from('avatars')
      .upload(avatarFileName, avatarFile);

    if (storageError) {
      await supabase.from('contact').delete().eq('contact_id', data.contact_id);
      console.log(storageError);
      throw new Error(
        'There was a problem while uploading avatar image. Contact was not created or updated.',
      );
    }
  }

  return data;
}

export async function deleteContact(id) {
  // 1. Fetch contact avatar url and create file path.
  const { data: contactAvatar, error: contactAvatarError } = await supabase
    .from('contact')
    .select('contact_avatar')
    .eq('contact_id', id);

  const avatarFilePath = contactAvatar?.at(0)?.contact_avatar
    ? contactAvatar.at(0).contact_avatar.split('/').at(-1)
    : false;

  // 2. Delete contact.
  const { data, error } = await supabase
    .from('contact')
    .delete()
    .eq('contact_id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('There was a problem while deleting contact data.');
  }

  // 3. Delete avatar image from storage bucket.
  if (avatarFilePath) {
    const { data: storageData, error: StorageError } = await supabase.storage
      .from('avatars')
      .remove([avatarFilePath]);

    if (StorageError) {
      console.log(error);
      throw new Error('There was a problem while deleting contact avatar.');
    }
  }

  return data;
}
