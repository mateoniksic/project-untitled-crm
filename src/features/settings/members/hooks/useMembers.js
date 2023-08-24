import { useQuery } from '@tanstack/react-query';
import { getWorkspaceUserProfiles as getWorkspaceUserProfilesApi } from '../../../../services/apiWorkspace';

function useWorkspaceUserProfiles({ workspaceId }) {
  const {
    data: workspaceUserProfiles,
    isLoading: isLoadingUserworkspaceUserProfiles,
    error: workspaceUserProfilesError,
  } = useQuery({
    queryKey: ['workspace_user_profiles'],
    queryFn: () => getWorkspaceUserProfilesApi({ workspaceId }),
  });

  return {
    workspaceUserProfiles,
    isLoadingUserworkspaceUserProfiles,
    workspaceUserProfilesError,
  };
}

export { useWorkspaceUserProfiles };
