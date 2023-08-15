import { styled } from 'styled-components';

import Text from './Text';
import UserAvatar from '../features/authentication/UserAvatar';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  
  background: var(--bg-normal);
  padding: 0.8rem 3.2rem;
  border-bottom: 1px solid var(--border-non-interactive);
`;

function Header({ pageTitle }) {
  return (
    <StyledHeader>
      <div>
        <Text
          as='h1'
          size='large'
        >
          {pageTitle}
        </Text>
      </div>
      <UserAvatar/>
    </StyledHeader>
  );
}

export default Header;
