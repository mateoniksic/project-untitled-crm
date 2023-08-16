import { styled } from 'styled-components';

import Text from './Text';
import UserAvatar from '../features/authentication/UserAvatar';

import { useApp } from '../context/AppContext';
import { useEffect } from 'react';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 3.2rem;
  background: var(--bg-normal);
  border-bottom: 1px solid var(--border-non-interactive);
`;

function Header() {
  const { pageTitle } = useApp();

  return (
    <StyledHeader>
      <div>
        <Text as="h1" size="large">
          {pageTitle}
        </Text>
      </div>
      <UserAvatar />
    </StyledHeader>
  );
}

export default Header;
