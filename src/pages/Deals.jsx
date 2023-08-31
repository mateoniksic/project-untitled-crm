import { useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import DealTable from '../features/deals/DealTable';

function Deals() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Deals'));

  return <DealTable />;
}

export default Deals;
