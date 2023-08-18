import { useEffect } from 'react';

import MainContainer from '../../ui/MainContainer';
import DealsTable from '../../features/deals/DealsTable';

import { useApp } from '../../hooks/useApp';

function Deals() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Deals'));

  return (
    <MainContainer>
      Deals
      <DealsTable />
    </MainContainer>
  );
}

export default Deals;
