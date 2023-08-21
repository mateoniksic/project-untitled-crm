import { useEffect } from 'react';

import MainContainer from '../components/MainContainer';

import { useApp } from '../hooks/useApp';

function Deal() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Deal'));

  return <MainContainer>Deal</MainContainer>;
}

export default Deal;
