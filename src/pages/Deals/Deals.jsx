import { useEffect } from 'react';

import MainContainer from '../../ui/MainContainer';

import { useApp } from '../../hooks/useApp';

function Deals() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Deals'));

  return <MainContainer>Deals</MainContainer>;
}

export default Deals;
