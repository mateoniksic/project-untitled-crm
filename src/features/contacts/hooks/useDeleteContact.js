import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { deleteContact as deleteContactApi } from '../../../services/apiContacts';

function useDeleteContact() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteContact } = useMutation({
    mutationFn: deleteContactApi,
    onSuccess: () => {
      console.log();
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
      toast.success(`Contact deleted successfully.`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteContact };
}

export { useDeleteContact };
