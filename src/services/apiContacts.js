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

export async function createOrEditContact(contact, id) {
  // 1. Set avatar
  const hasAvatar = Boolean(contact.contact_avatar);

  let avatarFileName = '';
  let avatarUrlPath = '';

  console.log('1:', contact, hasAvatar);
  if (hasAvatar) {
    const hasAvatarPath = contact.contact_avatar?.startsWith?.(supabaseUrl);

    avatarFileName = `${
      contact.contact_avatar?.name
    }-${crypto.randomUUID()}`.replaceAll('/', '');

    avatarUrlPath = hasAvatarPath
      ? contact.contact_avatar
      : `${supabaseUrl}/storage/v1/object/public/avatars/${avatarFileName}`;
  }

  avatarUrlPath = hasAvatar ? avatarUrlPath : null;
  console.log('2:', contact, avatarUrlPath);

  // 2. Create query
  let query = supabase.from('contact');

  if (!id) {
    query = query.insert([{ ...contact, contact_avatar: avatarUrlPath }]);
  }

  if (id) {
    query = query
      .update({ ...contact, contact_avatar: avatarUrlPath })
      .eq('contact_id', id);
  }

  // 3. Run query
  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error(
      `There was a problem while creating a new contact (${[
        contact.contact_first_name,
        contact.contact_last_name,
      ].join(' ')}).`,
    );
  }

  if (hasAvatar) {
    // 4. Upload avatar image in storage bucket.
    const { data: storageData, error: storageError } = await supabase.storage
      .from('avatars')
      .upload(avatarFileName, contact.contact_avatar);

    if (storageError) {
      await supabase.from('contact').delete().eq('contact_id', data.contact_id);
      console.log(storageError);
      throw new Error(
        'There was a problem while uploading avatar image. Contact was not created or updated.',
      );
    }
  }
}

export async function deleteContact(id) {
  // 1. Fetch contact avatar url and create file path.
  // const { data: contactAvatar, error: contactAvatarError } = await supabase
  //   .from('contact')
  //   .select('contact_avatar')
  //   .eq('contact_id', id);

  // const avatarFilePath = contactAvatar.at(0).contact_avatar.split('/').at(-1);

  // 2. Delete contact.
  const { error } = await supabase
    .from('contact')
    .delete()
    .eq('contact_id', id);

  if (error) {
    console.log(error);
    throw new Error('There was a problem while deleting contact data.');
  }

  // 3. Delete avatar image from storage bucket.
  // const { data: storageData, error: StorageError } = await supabase.storage
  //   .from('avatars')
  //   .remove([avatarFilePath]);

  // if (StorageError) {
  //   console.log(error);
  //   throw new Error('There was a problem while deleting contact avatar.');
  // }
}
