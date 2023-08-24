import { useQuery } from '@tanstack/react-query';
import { getBusinessProfile as getBusinessProfileApi } from '../../../../services/apiBusinessProfile';

function useBusinessProfile(workspaceId) {
  const {
    data: businessProfile,
    isLoading: isLoadingBussinessProfile,
    error: businessProfileError,
  } = useQuery({
    queryKey: ['business_profile', workspaceId],
    queryFn: () => getBusinessProfileApi(workspaceId),
  });

  return { businessProfile, isLoadingBussinessProfile, businessProfileError };
}

export { useBusinessProfile };
