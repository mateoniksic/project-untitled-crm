import { styled } from 'styled-components';
import { KeyRoundIcon, BriefcaseIcon, UserIcon } from 'lucide-react';
import { Nav, NavList, NavLink } from './VerticalNav';
import Text from './Text';
import ProfileCard from './ProfileCard';

const StyledSettingsSidebar = styled.div`
  background-color: var(--bg-subtle);
  border-radius: 0.8rem;
  border: 1px solid var(--border-non-interactive);
  max-width: 30rem;
  min-width: 27rem;
  overflow: hidden;
  width: 100%;
`;

const SettingsSidebarHeader = styled.div`
  border-bottom: 1px solid var(--border-non-interactive);
  padding: 2.4rem;
`;

const SettingsSidebarMain = styled.div`
  background-color: var(--bg-normal);
  padding: 2.4rem;
`;

function SettingsSidebar() {
  return (
    <StyledSettingsSidebar>
      <SettingsSidebarHeader>
        <ProfileCard
          firstName={'John'}
          lastName={'Doe'}
          email={'john.doe@example.com'}
          variation="full"
        />
      </SettingsSidebarHeader>
      <SettingsSidebarMain>
        <Nav>
          <NavList>
            <Text size="subtle-semibold">Workspace settings</Text>
            <li>
              <NavLink to="/workspace/settings" end>
                <BriefcaseIcon size="20" />
                <span>Workspace</span>
              </NavLink>
            </li>
          </NavList>
          <NavList>
            <Text size="subtle-semibold">User settings</Text>
            <li>
              <NavLink to="/workspace/settings/profile">
                <UserIcon size="20" />
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/workspace/settings/account">
                <KeyRoundIcon size="20" />
                <span>Account</span>
              </NavLink>
            </li>
          </NavList>
        </Nav>
      </SettingsSidebarMain>
    </StyledSettingsSidebar>
  );
}

export default SettingsSidebar;
