import { useQuery } from '@tanstack/react-query';

import { getContact as getContactApi } from '../../../services/apiContacts';

function useContact(id) {
  const {
    data: contact,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['contact', id],
    queryFn: () => getContactApi(id),
  });

  return {
    contact,
    isLoading,
    error,
  };
}

export { useContact };
