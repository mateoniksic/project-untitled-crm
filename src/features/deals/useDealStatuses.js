import { useQuery } from '@tanstack/react-query';
import { getDealStatuses as getDealStatusesApi } from '../../services/apiDealStatus';

function useDealStatuses() {
  const {
    data: dealStatuses,
    isLoading: isLoadingDealStatuses,
    error: dealStatusesError,
  } = useQuery({
    queryKey: ['deal_statuses'],
    queryFn: getDealStatusesApi,
  });

  return {
    dealStatuses,
    isLoadingDealStatuses,
    dealStatusesError,
  };
}

export { useDealStatuses };
