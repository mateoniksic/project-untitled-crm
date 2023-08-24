import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateWorkspace as updateWorkspaceApi } from '../../../../services/apiWorkspace';

function useUpdateWorkspace() {
  const queryClient = useQueryClient();
  const {
    mutate: updateWorkspace,
    isLoading: isUpdatingWorkspace,
    error: updateWorkspaceError,
  } = useMutation({
    mutationFn: ({ workspace, workspaceId }) =>
      updateWorkspaceApi({ workspace, workspaceId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workspace'] });
      toast.success('Workspace updated successfully.');
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { updateWorkspace, isUpdatingWorkspace, updateWorkspaceError };
}

export { useUpdateWorkspace };
