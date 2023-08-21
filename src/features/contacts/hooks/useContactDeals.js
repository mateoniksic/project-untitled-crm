import { useQuery } from '@tanstack/react-query';

import { getContactDeals as getContactDealsApi } from '../../../services/apiDeals';

function useContactDeals(id) {
  const {
    data: deals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['contactDeals', id],
    queryFn: () => getContactDealsApi(id),
  });

  return {
    deals,
    isLoading,
    error,
  };
}

export { useContactDeals };
