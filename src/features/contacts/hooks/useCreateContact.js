import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createContact as createContactApi } from '../../../services/apiContact';

function useCreateContact() {
  const queryClient = useQueryClient();
  const {
    mutate: createContact,
    isLoading: isCreatingContact,
    error: createContactError,
  } = useMutation({
    mutationFn: createContactApi,
    onSuccess: (data) => {
      toast.success(
        `New contact (${[data.contact_first_name, data.contact_last_name].join(
          ' ',
        )}) created successfully.`,
      );
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
    onError: (err) => toast.error(err),
  });

  return { createContact, isCreatingContact, createContactError };
}

export { useCreateContact };
