import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateUser as updateUserApi } from '../../../../services/apiAuth';

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isLoadingUpdateUser } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success('Account updated successfully.');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return { updateUser, isLoadingUpdateUser };
}

export { useUpdateUser };
