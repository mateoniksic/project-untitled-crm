import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signUp as signUpApi } from '../../services/apiAuth';

function useSignUp() {
  const {
    mutate: signUp,
    isLoading: isLoadingSignUp,
    error: signUpError,
  } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        'User created successfully. Please, sign in to your new account.',
      );
    },
  });

  return { signUp, isLoadingSignUp, signUpError };
}

export { useSignUp };
