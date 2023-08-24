import { useQuery } from '@tanstack/react-query';
import { getContact as getContactApi } from '../../../services/apiContact';

function useContact(id) {
  const {
    data: contact,
    isLoading: isLoadingContact,
    error: contactError,
  } = useQuery({
    queryKey: ['contact', id],
    queryFn: () => getContactApi(id),
  });

  return {
    contact,
    isLoadingContact,
    contactError,
  };
}

export { useContact };
