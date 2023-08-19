import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';

import SettingsSidebar from './SettingsSidebar';

import { useApp } from '../../hooks/useApp';

const StyledSettings = styled.div`
  display: grid;
  gap: 3.2rem;
  grid-template-columns: auto 1fr;
  height: 100%;
  padding: 3.2rem;
  place-items: start;
`;

const SettingsMain = styled.main`
  background-color: var(--bg-normal);
  border-radius: 0.8rem;
  border: 1px solid var(--border-non-interactive);
  overflow: hidden;
  padding: 3.2rem;
  min-width: max-content;
  width: 100%;
  max-width: 69rem;
`;

function Settings() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Settings'));

  return (
    <StyledSettings>
      <SettingsSidebar />
      <SettingsMain>
        <Outlet />
      </SettingsMain>
    </StyledSettings>
  );
}

export default Settings;
