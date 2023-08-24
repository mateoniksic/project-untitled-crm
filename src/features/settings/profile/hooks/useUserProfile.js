import { useQuery } from '@tanstack/react-query';
import { getUserProfile as getUserProfileApi } from '../../../../services/apiUserProfile';

function useUserProfile(userId) {
  const {
    data: userProfile,
    isLoading: isLoadingUserProfile,
    error: userProfileError,
  } = useQuery({
    queryKey: ['user_profile', userId],
    queryFn: () => getUserProfileApi(userId),
  });

  return {
    userProfile,
    isLoadingUserProfile,
    userProfileError,
  };
}

export { useUserProfile };
