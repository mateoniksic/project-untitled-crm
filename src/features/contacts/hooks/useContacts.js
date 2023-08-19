import { useQuery } from '@tanstack/react-query';

import { getContacts as getContactsApi } from '../../../services/apiContacts';

function useContacts() {
  const {
    data: contacts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContactsApi,
  });

  return {
    contacts,
    isLoading,
    error,
  };
}

export { useContacts };
