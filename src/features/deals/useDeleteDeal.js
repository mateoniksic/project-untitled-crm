import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteDeal as deleteDealApi } from '../../services/apiDeal';

function useDeleteDeal() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteDeal,
    isLoading: isDeletingDeal,
    error: deleteDealError,
  } = useMutation({
    mutationFn: (id) => deleteDealApi(id),
    onSuccess: () => {
      toast.success(`Deal deleted successfully.`);
      queryClient.invalidateQueries({ queryKey: ['deals'] });
      queryClient.invalidateQueries({ queryKey: ['contact_deals'] });
    },
    onError: (err) => toast.error(err),
  });

  return { deleteDeal, isDeletingDeal, deleteDealError };
}

export { useDeleteDeal };
