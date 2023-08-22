import { useEffect } from 'react';

import DealsTable from '../features/deals/DealsTable';

import { useApp } from '../hooks/useApp';

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
