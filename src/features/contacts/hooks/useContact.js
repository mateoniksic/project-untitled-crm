import { useQuery } from '@tanstack/react-query';
import { getContact as getContactApi } from '../../../services/apiContact';

function useContact({ contactId, workspaceId }) {
  const {
    data: contact,
    isLoading: isLoadingContact,
    error: contactError,
  } = useQuery({
    queryKey: ['contact', contactId, workspaceId],
    queryFn: () => getContactApi({ contactId, workspaceId }),
  });

  return {
    contact,
    isLoadingContact,
    contactError,
  };
}

export { useContact };
