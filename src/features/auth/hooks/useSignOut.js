import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signOutUser as signOutUserApi } from '../../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signOutUser, isLoading: isLoadingSignOutUser } = useMutation({
    mutationFn: signOutUserApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/auth', { replace: true });
    },
  });

  return { signOutUser, isLoadingSignOutUser };
}

export { useSignOut };
