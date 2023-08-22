import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signOut as signOutApi } from '../../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signOut, isLoading: isLoadingSignOutUser } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/auth', { replace: true });
    },
  });

  return { signOut, isLoadingSignOutUser };
}

export { useSignOut };
