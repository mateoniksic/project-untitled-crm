import { useQuery } from '@tanstack/react-query';
import { getContactDeals as getContactDealsApi } from '../../services/apiDeal';

function useContactDeals(id) {
  const {
    data: contactDeals,
    isLoading: isLoadingContactDeals,
    error: contactDealsError,
  } = useQuery({
    queryKey: ['contactDeals', id],
    queryFn: () => getContactDealsApi(id),
  });

  return {
    contactDeals,
    isLoadingContactDeals,
    contactDealsError,
  };
}

export { useContactDeals };
