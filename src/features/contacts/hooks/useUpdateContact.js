import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateContact as updateContactApi } from '../../../services/apiContact';

function useUpdateContact() {
  const queryClient = useQueryClient();
  const {
    mutate: updateContact,
    isLoading: isUpdatingContact,
    error: updateContactError,
  } = useMutation({
    mutationFn: ({ contact, id }) => updateContactApi(contact, id),
    onSuccess: () => {
      toast.success('Contact updated successfully.');
      queryClient.invalidateQueries({ queryKey: ['contact'] });
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
    onError: (err) => toast.error(err),
  });

  return { updateContact, isUpdatingContact, updateContactError };
}

export { useUpdateContact };
