import { useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import DealTable from '../features/deals/DealTable';

function Deals() {
  const { updatePageTitle } = useApp();
  useEffect(() => updatePageTitle('Deals'), [updatePageTitle]);

  return <DealTable />;
}

export default Deals;
