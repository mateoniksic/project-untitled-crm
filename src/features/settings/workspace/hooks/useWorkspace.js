import { useQuery } from '@tanstack/react-query';
import { getWorkspace as getWorkspaceApi } from '../../../../services/apiWorkspace';

function useWorkspace({ workspaceId }) {
  const {
    data: workspace,
    isLoading: isLoadingWorkspace,
    error: workspaceError,
  } = useQuery({
    queryKey: ['workspace', workspaceId],
    queryFn: () => getWorkspaceApi({ workspaceId }),
  });

  return { workspace, isLoadingWorkspace, workspaceError };
}

export { useWorkspace };
