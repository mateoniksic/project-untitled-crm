import { useEffect } from 'react';

import { useApp } from '../context/AppContext';

function Dashboard() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Dashboard'));

  return <div>Dashboard</div>;
}

export default Dashboard;
