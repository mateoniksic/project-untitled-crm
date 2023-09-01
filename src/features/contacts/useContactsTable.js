import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getContacts as getContactsApi } from '../../services/apiContact';
import { useLocation, useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

function useContactsTable({ workspaceId }) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const search = searchParams.get('search');

  const {
    data: { data: contacts, count } = {},
    isLoading: isLoadingContacts,
    error: contactsError,
  } = useQuery({
    queryKey: ['contacts', workspaceId, page, search],
    queryFn: () => getContactsApi({ workspaceId, page, search }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['contacts', workspaceId, page + 1],
      queryFn: () => getContactsApi({ workspaceId, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['contacts', workspaceId, page - 1],
      queryFn: () => getContactsApi({ workspaceId, page: page - 1 }),
    });
  }

  return {
    contacts,
    count,
    isLoadingContacts,
    contactsError,
  };
}

export { useContactsTable };
