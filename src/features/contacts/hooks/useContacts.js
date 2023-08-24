import { useQuery } from '@tanstack/react-query';
import { getContacts as getContactsApi } from '../../../services/apiContact';

function useContacts() {
  const {
    data: contacts,
    isLoading: isLoadingContacts,
    error: contactsError,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContactsApi,
  });

  return {
    contacts,
    isLoadingContacts,
    contactsError,
  };
}

export { useContacts };
