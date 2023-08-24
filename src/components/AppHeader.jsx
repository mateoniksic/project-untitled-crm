import { styled } from 'styled-components';
import { useApp } from '../hooks/useApp';
import Text from './Text';
import ProfileCard from './ProfileCard';

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

  return (
    <StyledAppHeader>
      <Text size="large">{pageTitle}</Text>
      <ProfileCard
        firstName="John"
        lastName="Doe"
        email="john.doe@example.com"
        variation="reversed"
      />
    </StyledAppHeader>
  );
}

export default AppHeader;
