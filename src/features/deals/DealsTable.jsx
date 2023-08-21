import { useQuery } from '@tanstack/react-query';
import { getDeals } from '../../services/apiDeals';

import Spinner from '../../components/Spinner';

function DealsTable() {
  const {
    data: deals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['deals'],
    queryFn: getDeals,
  });

  console.log(deals);

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );

  return <div></div>;
}

export default DealsTable;
