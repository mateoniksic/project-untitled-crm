import { useQuery } from '@tanstack/react-query';
import { getBusinessProfile as getBusinessProfileApi } from '../../../../services/apiBusinessProfile';

function useBusinessProfile(workspace_id) {
  const {
    data: businessProfile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['business_profile', workspace_id],
    queryFn: () => getBusinessProfileApi(workspace_id),
  });

  return { businessProfile, isLoading, error };
}

export { useBusinessProfile };
