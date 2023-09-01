import supabase, { supabaseUrl } from './supabase';

export async function getUserProfile({ userId }) {
  const { data, error } = await supabase
    .from('user_profile')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw new Error('There was a problem while fetching user profile data.');
  }

  return data;
}

export async function updateUserProfile({ userProfile, userId }) {
  // 1. Check and set avatar
  const avatar = userProfile.user_profile_avatar
    ? typeof userProfile.user_profile_avatar === 'string'
      ? userProfile.user_profile_avatar
      : userProfile.user_profile_avatar[0]
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
    .from('user_profile')
    .update({ ...userProfile, user_profile_avatar: avatarUrlPath })
    .eq('user_id', userId)
    .select();
  if (error) {
    throw new Error('There was a problem while updating user profile data.');
  }

  // 3. Upload avatar image in storage bucket if there's a new file.
  if (avatarFile) {
    const { error: storageError } = await supabase.storage
      .from('avatars')
      .upload(avatarFileName, avatarFile);
    if (storageError) {
      throw new Error(
        'There was a problem while uploading avatar image. User profile not updated correctly.',
      );
    }
  }

  return data;
}
