import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateDeal as updateDealApi } from '../../services/apiDeal';

function useUpdateDeal() {
  const queryClient = useQueryClient();
  const {
    mutate: updateDeal,
    isLoading: isUpdatingDeal,
    error: updateDealError,
  } = useMutation({
    mutationFn: ({ deal }) => updateDealApi({ deal }),
    onSuccess: (data) => {
      toast.success(`Deal (${data.deal_title}) updated successfully.`);
      queryClient.invalidateQueries({ queryKey: ['deals'] });
      queryClient.invalidateQueries({ queryKey: ['contact_deals'] });
    },
    onError: (err) => toast.error(err),
  });

  return { updateDeal, isUpdatingDeal, updateDealError };
}

export { useUpdateDeal };
