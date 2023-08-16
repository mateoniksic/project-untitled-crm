import styled from 'styled-components';
import { User2 } from 'lucide-react';

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

function UserAvatar() {
  const avatar = '';

  return (
    <StyledUserAvatar>
      <span>John Doe</span>
      <Avatar
        src={avatar || '../../../public/user/default-avatar.svg'}
        alt="User avatar"
      />
    </StyledUserAvatar>
  );
}

export default UserAvatar;
