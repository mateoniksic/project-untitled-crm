import { styled } from 'styled-components';
import { useApp } from '../hooks/useApp';
import { useUser } from '../features/auth/useUser';
import { useUserProfile } from '../features/settings/user-profile/useUserProfile';
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
    user: { id: userId },
    isLoadingUser,
  } = useUser();
  const { userProfile, isLoadingUserProfile } = useUserProfile({ userId });
  const isLoading = isLoadingUser || isLoadingUserProfile;

  return (
    <StyledAppHeader>
      <Text size="large">{pageTitle}</Text>
      {isLoading ? (
        <Spinner.Wrapper>
          <Spinner />
        </Spinner.Wrapper>
      ) : (
        <ProfileCard
          firstName={userProfile.user_profile_first_name}
          lastName={userProfile.user_profile_last_name}
          avatarUrl={userProfile.user_profile_avatar}
          variation="reversed"
        />
      )}
    </StyledAppHeader>
  );
}

export default AppHeader;
