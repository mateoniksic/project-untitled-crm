import { styled } from 'styled-components';
import { useApp } from '../hooks/useApp';
import { useUser } from '../features/auth/hooks/useUser';
import { useUserProfile } from '../features/settings/profile/hooks/useUserProfile';
import Text from './Text';
import ProfileCard from './ProfileCard';
import Spinner from './Spinner';

const StyledAppHeader = styled.header`
  align-items: center;
  background: var(--bg-normal);
  border-bottom: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.8rem 3.2rem;
`;

function AppHeader() {
  const { pageTitle } = useApp();
  const {
    user: { id: userId, email },
  } = useUser();
  const { userProfile, isLoadingUserProfile } = useUserProfile({ userId });

  return (
    <StyledAppHeader>
      <Text size="large">{pageTitle}</Text>
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
          variation="reversed"
        />
      )}
    </StyledAppHeader>
  );
}

export default AppHeader;
