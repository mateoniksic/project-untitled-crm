import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';

import { useApp } from '../context/AppContext';

function Settings() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Settings'));

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Settings;
