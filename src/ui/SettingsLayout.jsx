import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import SettingsSidebar from './SettingsSidebar';

const StyledSettings = styled.div`
  display: grid;
  gap: 3.2rem;
  grid-template-columns: minmax(min-content, 32rem) 1fr;
  height: 100%;
  padding: 3.2rem;
  place-items: start;
`;

const SettingsMain = styled.main`
  background-color: var(--bg-normal);
  border-radius: 0.8rem;
  border: 1px solid var(--border-non-interactive);
  max-width: 69rem;
  min-width: max-content;
  overflow: hidden;
  padding: 3.2rem;
  width: 100%;
`;

function Settings() {
  const { updatePageTitle } = useApp();
  useEffect(() => updatePageTitle('Settings'), [updatePageTitle]);

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
