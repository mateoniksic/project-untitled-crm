import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { signIn as signInApi } from '../../../services/apiAuth';

function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signIn, isLoading: isLoadingSignIn } = useMutation({
    mutationFn: ({ email, password }) => signInApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(['user'], user.user);
      navigate('/workspace', { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error('Provided email or password are incorrect.');
    },
  });

  return { signIn, isLoadingSignIn };
}

export { useSignIn };
