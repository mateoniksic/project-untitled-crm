import supabase, { supabaseUrl } from './supabase';

export async function getContacts() {
  const { data, error } = await supabase
    .from('contact')
    .select(
      `*, 
    user_profile(*)`,
    )
    .order('contact_created_at', { ascending: false });

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching contacts data.');
  }

  return data;
}

export async function updateContact(contact, id) {
  // 1. Check and set avatar
  const hasAvatar = Boolean(contact.contact_avatar);
  const avatarFile =
    hasAvatar &&
    contact.contact_avatar instanceof File &&
    contact.contact_avatar;

  let avatarFileName = '';
  let avatarUrlPath = '';

  if (hasAvatar && avatarFile) {
    avatarFileName = `${
      contact.contact_avatar?.name
    }-${crypto.randomUUID()}`.replaceAll('/', '');

    avatarUrlPath = contact.contact_avatar?.startsWith?.(supabaseUrl)
      ? contact.contact_avatar
      : `${supabaseUrl}/storage/v1/object/public/avatars/${avatarFileName}`;
  } else if (hasAvatar) {
    avatarUrlPath = contact.contact_avatar;
  } else {
    avatarUrlPath = null;
  }

  // 2. Run query
  const { data, error } = await supabase
    .from('contact')
    .update({ ...contact, contact_avatar: avatarUrlPath })
    .eq('contact_id', id)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error(
      `There was a problem while updating a contact (${[
        contact.contact_first_name,
        contact.contact_last_name,
      ].join(' ')}).`,
    );
  }

  // 3. Upload avatar image in storage bucket if there's a new file.
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

export async function createContact(contact) {
  // 1. Check and set avatar
  const avatarFile =
    contact.contact_avatar instanceof File && contact.contact_avatar;

  let avatarFileName = '';
  let avatarUrlPath = '';

  if (avatarFile) {
    avatarFileName = `${
      contact.contact_avatar?.name
    }-${crypto.randomUUID()}`.replaceAll('/', '');

    avatarUrlPath = contact.contact_avatar?.startsWith?.(supabaseUrl)
      ? contact.contact_avatar
      : `${supabaseUrl}/storage/v1/object/public/avatars/${avatarFileName}`;
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

  const avatarFilePath = contactAvatar.at(0).contact_avatar
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
}
