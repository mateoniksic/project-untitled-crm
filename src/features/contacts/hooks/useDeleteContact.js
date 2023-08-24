import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteContact as deleteContactApi } from '../../../services/apiContact';

function useDeleteContact() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteContact,
    isLoading: isDeletingContact,
    error: deleteContactError,
  } = useMutation({
    mutationFn: ({ contactId }) => deleteContactApi({ contactId }),
    onSuccess: () => {
      toast.success(`Contact deleted successfully.`);
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteContact, isDeletingContact, deleteContactError };
}

export { useDeleteContact };
