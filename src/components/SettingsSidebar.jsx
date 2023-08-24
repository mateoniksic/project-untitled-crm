import { styled } from 'styled-components';
import { KeyRoundIcon, BriefcaseIcon, UserIcon, Users2 } from 'lucide-react';
import { Nav, NavList, NavLink } from './VerticalNav';
import { useUser } from '../features/auth/hooks/useUser';
import { useUserProfile } from '../features/settings/profile/hooks/useUserProfile';
import Text from './Text';
import ProfileCard from './ProfileCard';
import Spinner from './Spinner';

const StyledSettingsSidebar = styled.div`
  background-color: var(--bg-subtle);
  border-radius: 0.8rem;
  border: 1px solid var(--border-non-interactive);
  min-width: min-content;
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
  const {
    user: { id: userId, email },
  } = useUser();
  const { userProfile, isLoadingUserProfile } = useUserProfile({ userId });

  return (
    <StyledSettingsSidebar>
      <SettingsSidebarHeader>
        {isLoadingUserProfile ? (
          <Spinner.Wrapper>
            <Spinner />
          </Spinner.Wrapper>
        ) : (
          <ProfileCard
            firstName={userProfile.user_profile_first_name}
            lastName={userProfile.user_profile_last_name}
            email={email}
            avatarUrl={userProfile.user_profile_avatar}
            variation="full"
          />
        )}
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
            <li>
              <NavLink to="/workspace/settings/members" end>
                <Users2 size="20" />
                <span>Members</span>
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
