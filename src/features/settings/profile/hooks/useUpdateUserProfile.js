import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateUserProfile as updateUserProfileApi } from '../../../../services/apiUserProfile';

function useUpdateUserProfile() {
  const queryClient = useQueryClient();
  const {
    mutate: updateUserProfile,
    isLoading: isUpdatingUserProfile,
    error: updateUserProfileError,
  } = useMutation({
    mutationFn: ({ userProfile, userId }) =>
      updateUserProfileApi({ userProfile, userId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user_profile'] });
      toast.success('User profile updated successfully.');
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { updateUserProfile, isUpdatingUserProfile, updateUserProfileError };
}

export { useUpdateUserProfile };
