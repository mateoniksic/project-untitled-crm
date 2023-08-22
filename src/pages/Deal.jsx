import { useEffect } from 'react';

import { useApp } from '../hooks/useApp';

function Deal() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Deal'));

  return <>Deal</>;
}

export default Deal;
