import { useQuery } from '@tanstack/react-query';
import { getDeals as getDealsApi } from '../../../services/apiDeal';

function useDeals({ workspaceId }) {
  const {
    data: deals,
    isLoading: isLoadingDeals,
    error: dealsError,
  } = useQuery({
    queryKey: ['deals'],
    queryFn: () => getDealsApi({ workspaceId }),
  });

  return {
    deals,
    isLoadingDeals,
    dealsError,
  };
}

export { useDeals };
