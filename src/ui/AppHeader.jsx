import { styled } from 'styled-components';
import { useApp } from '../hooks/useApp';
import { useUser } from '../features/auth/useUser';
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
    user: {
      email: userEmail,
      user_profile: {
        user_profile_first_name: userFirstName,
        user_profile_last_name: userLastName,
        user_profile_avatar: userAvatar,
      },
    },
    isLoadingUser,
  } = useUser();

  return (
    <StyledAppHeader>
      <Text size="large">{pageTitle}</Text>
      {isLoadingUser ? (
        <Spinner.Wrapper>
          <Spinner />
        </Spinner.Wrapper>
      ) : (
        <ProfileCard
          firstName={userFirstName}
          lastName={userLastName}
          email={userEmail}
          avatarUrl={userAvatar}
          variation="reversed"
        />
      )}
    </StyledAppHeader>
  );
}

export default AppHeader;
