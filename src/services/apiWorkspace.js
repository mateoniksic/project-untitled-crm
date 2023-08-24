import supabase from './supabase';

export async function getWorkspace(workspaceId) {
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
