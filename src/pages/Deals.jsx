import { useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import DealsTable from '../features/deals/DealsTable';

function Deals() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Deals'));

  return (
    <>
      Deals
      <DealsTable />
    </>
  );
}

export default Deals;
