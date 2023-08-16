import { useEffect } from 'react';

import { useApp } from '../../context/AppContext';

function Deals() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Deals'));

  return <div>Deals</div>;
}

export default Deals;
