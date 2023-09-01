import supabase from './supabase';

export async function getWorkspace({ workspaceId }) {
  const { data, error } = await supabase
    .from('workspace')
    .select('*')
    .eq('workspace_id', workspaceId)
    .single();

  if (error) {
    throw new Error('There was a problem while fetching workspace data.');
  }

  return data;
}

export async function updateWorkspace({ workspace, workspaceId }) {
  const { data, error } = await supabase
    .from('workspace')
    .update(workspace)
    .eq('workspace_id', workspaceId)
    .select();

  if (error) {
    throw new Error('There was a problem while fetching workspace data.');
  }

  return data;
}

export async function getWorkspaceUserProfiles({ workspaceId }) {
  const { data: workspaceUsers, error: workspaceUsersError } = await supabase
    .from('user_workspace')
    .select('user_id')
    .eq('workspace_id', workspaceId);

  if (workspaceUsersError) {
    throw new Error('There was a problem while fetching workspace user ids.');
  }

  const workspaceUsersId = workspaceUsers.map((user) => user.user_id);

  const { data: userProfiles, error: userProfilesError } = await supabase
    .from('user_profile')
    .select('*')
    .in('user_id', workspaceUsersId);

  if (userProfilesError) {
    throw new Error(
      'There was a problem while fetching workspace user profiles.',
    );
  }

  return userProfiles;
}
