import { useQuery } from '@tanstack/react-query';
import { getSignedInUser } from '../../../services/apiAuth';

function useUser() {
  const {
    data: user,
    isLoading: isLoadingUser,
    error: userError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getSignedInUser,
  });

  const isAuthenticatedUser = user?.role === 'authenticated';

  return { user, isLoadingUser, userError, isAuthenticatedUser };
}

export { useUser };
