import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getDeals as getDealsApi } from '../../services/apiDeal';
import { PAGE_SIZE } from '../../utils/constants';

function useDeals({ workspaceId }) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  // const q = searchParams.get('q');
  const statusId = searchParams.get('status');
  const stageId = searchParams.get('stage');

  const {
    data: { data: deals, count } = {},
    isLoading: isLoadingDeals,
    error: dealsError,
  } = useQuery({
    queryKey: ['deals', workspaceId, page, statusId, stageId],
    queryFn: () => getDealsApi({ workspaceId, page, statusId, stageId }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['deals', workspaceId, page + 1],
      queryFn: () => getDealsApi({ workspaceId, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['deals', workspaceId, page - 1],
      queryFn: () => getDealsApi({ workspaceId, page: page - 1 }),
    });
  }

  return {
    deals,
    count,
    isLoadingDeals,
    dealsError,
  };
}

export { useDeals };
