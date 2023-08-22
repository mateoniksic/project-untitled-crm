import { useQuery } from '@tanstack/react-query';
import { getSignedInUser } from '../../../services/apiAuth';

function useUser() {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: getSignedInUser,
  });

  const isAuthenticated = user?.role === 'authenticated';

  return { user, isLoadingUser, isAuthenticated };
}

export { useUser };
