import { useQueries } from '@tanstack/react-query';
import { getContact as getContactApi } from '../../services/apiContact';
import { getContactDeals as getContactDealsApi } from '../../services/apiContact';

function useContact({ contactId, workspaceId }) {
  const results = useQueries({
    queries: [
      {
        queryKey: ['contact', contactId, workspaceId],
        queryFn: () => getContactApi({ contactId, workspaceId }),
      },
      {
        queryKey: ['contact_deals', contactId],
        queryFn: () => getContactDealsApi({ contactId }),
      },
    ],
  });

  const isLoading = results.some((query) => query.isLoading);
  const isError = results.some((query) => query.error);
  const [{ data: contact }, { data: deals }] = results;

  return {
    data: { contact, deals },
    isLoading,
    isError,
  };
}

export { useContact };
