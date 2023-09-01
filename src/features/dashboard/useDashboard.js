import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getDeals as getDealsApi } from '../../services/apiDeal';
import { subDays } from 'date-fns';

function useDashboard({ workspaceId }) {
  const [searchParams] = useSearchParams();

  const last = searchParams.get('last') ? Number(searchParams.get('last')) : 7;
  const date = subDays(new Date(), last).toISOString();

  const {
    data: { data: deals } = {},
    isLoading: isLoadingDeals,
    error: dealsError,
  } = useQuery({
    queryKey: ['deals', workspaceId, last],
    queryFn: () => getDealsApi({ workspaceId, date }),
  });

  return {
    deals,
    isLoadingDeals,
    dealsError,
  };
}

export { useDashboard };
