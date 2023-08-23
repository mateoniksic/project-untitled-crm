import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signUp as signUpApi } from '../../../services/apiAuth';
import { useSignIn } from './useSignIn';

function useSignUp() {
  const { mutate: signUp, isLoading: isLoadingSignUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success('User created successfully.');
    },
  });

  return { signUp, isLoadingSignUp };
}

export { useSignUp };
