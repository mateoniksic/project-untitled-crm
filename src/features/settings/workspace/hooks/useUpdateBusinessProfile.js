import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateBusinessProfile as updateBusinessProfileApi } from '../../../../services/apiBusinessProfile';

function useUpdateBusinessProfile() {
  const queryClient = useQueryClient();
  const {
    mutate: updateBusinessProfile,
    isLoading: isUpdatingBusinessProfile,
    error: updatingBusinessProfileError,
  } = useMutation({
    mutationFn: ({ businessProfile, workspaceId }) =>
      updateBusinessProfileApi({ businessProfile, workspaceId }),
    onSuccess: () => {
      toast.success('Business profile updated successfully.');
      queryClient.invalidateQueries({ queryKey: ['business_profile'] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    updateBusinessProfile,
    isUpdatingBusinessProfile,
    updatingBusinessProfileError,
  };
}

export { useUpdateBusinessProfile };
