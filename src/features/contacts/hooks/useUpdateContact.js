import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateContact as updateContactApi } from '../../../services/apiContacts';

function useUpdateContact() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateContact } = useMutation({
    mutationFn: ({ contact, id }) => updateContactApi(contact, id),
    onSuccess: () => {
      toast.success('Contact updated successfully.');
      queryClient.invalidateQueries({ queryKey: ['contact'] });
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
    onError: (err) => toast.error(err),
  });

  return { isUpdating, updateContact };
}

export { useUpdateContact };
