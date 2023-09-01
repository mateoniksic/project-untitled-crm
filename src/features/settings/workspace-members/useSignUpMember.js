import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signUpMember as signUpMemberApi } from '../../../services/apiAuth';

function useSignUpMember() {
  const {
    mutate: signUpMember,
    isLoading: isLoadingSignUpMember,
    error: signUpMemberError,
  } = useMutation({
    mutationFn: signUpMemberApi,
    onSuccess: () => {
      toast.success(
        'User created successfully. Please, sign in to your new account.',
      );
    },
  });

  return { signUpMember, isLoadingSignUpMember, signUpMemberError };
}

export { useSignUpMember };
