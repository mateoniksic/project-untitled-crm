import supabase from './supabase';

export async function getBusinessProfile(workspaceId) {
  const { data, error } = await supabase
    .from('business_profile')
    .select('*')
    .eq('workspace_id', workspaceId)
    .single();

  if (error)
    throw new Error('There was a problem while updating a business profile.');

  return data;
}

export async function updateBusinessProfile({ businessProfile, workspaceId }) {
  const { error } = await supabase
    .from('business_profile')
    .update(businessProfile)
    .eq('workspace_id', workspaceId);

  if (error)
    throw new Error('There was a problem while updating a business profile.');
}
