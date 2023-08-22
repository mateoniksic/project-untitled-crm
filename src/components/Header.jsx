import { styled } from 'styled-components';

import Text from './Text';
import AvatarCard from './AvatarCard';

import { useApp } from '../hooks/useApp';

const StyledHeader = styled.header`
  align-items: center;
  background: var(--bg-normal);
  border-bottom: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.8rem 3.2rem;
`;

function Header() {
  const { pageTitle } = useApp();

  return (
    <StyledHeader>
      <Text as="h1" size="large">
        {pageTitle}
      </Text>
      <AvatarCard
        firstName="John"
        lastName="Doe"
        email="john.doe@example.com"
        variation="reversed"
      />
    </StyledHeader>
  );
}

export default Header;
