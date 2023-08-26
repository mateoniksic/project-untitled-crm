import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signOut as signOutApi } from '../../services/apiAuth';

function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: signOut,
    isLoading: isLoadingSignOutUser,
    error: signOutError,
  } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/auth', { replace: true });
    },
  });

  return { signOut, isLoadingSignOutUser, signOutError };
}

export { useSignOut };
