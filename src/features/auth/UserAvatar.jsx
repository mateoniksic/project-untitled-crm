import styled from 'styled-components';
import { User2 } from 'lucide-react';

import Text from '../../ui/Text';

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  height: 4rem;
  width: 4.1rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const UserDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

function UserAvatar({ variation }) {
  const avatar = '';

  if (variation === 'reversed-small')
    return (
      <StyledUserAvatar>
        <Text as="span" size="subtle-medium">
          John Doe
        </Text>
        <Avatar src={avatar || '/user/default-avatar.svg'} alt="User avatar" />
        <UserDetails></UserDetails>
      </StyledUserAvatar>
    );

  return (
    <StyledUserAvatar>
      <Avatar src={avatar || '/user/default-avatar.svg'} alt="User avatar" />
      <UserDetails>
        <Text as="span" size="subtle-medium">
          John Doe
        </Text>
        <Text as="span" size="detail">
          john.doe@gmail.com
        </Text>
      </UserDetails>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
