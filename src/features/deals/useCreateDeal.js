import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createDeal as createDealApi } from '../../services/apiDeal';

function useCreateDeal() {
  const queryClient = useQueryClient();
  const {
    mutate: createDeal,
    isLoading: isCreatingDeal,
    error: createDealError,
  } = useMutation({
    mutationFn: ({ deal }) => createDealApi({ deal }),
    onSuccess: (data) => {
      toast.success(`New deal (${data.deal_title}) created successfully.`);
      queryClient.invalidateQueries({ queryKey: ['deals'] });
      queryClient.invalidateQueries({ queryKey: ['contact_deals'] });
    },
    onError: (err) => toast.error(err),
  });

  return { createDeal, isCreatingDeal, createDealError };
}

export { useCreateDeal };
