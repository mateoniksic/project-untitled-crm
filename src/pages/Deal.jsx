import { useEffect } from 'react';

import { useApp } from '../context/AppContext';

function Deal() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Deal'));

  return <div>Deal</div>;
}

export default Deal;
