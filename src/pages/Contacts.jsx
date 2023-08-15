import { useEffect } from 'react';

import { useApp } from '../context/AppContext';

function Contacts() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Dashboard'));

  return <div>Contacts</div>;
}

export default Contacts;
