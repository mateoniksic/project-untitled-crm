import styled from 'styled-components';

import Text from '../../components/Text';

const StyledUserAvatar = styled.div`
  align-items: center;
  color: var(--color-grey-600);
  display: flex;
  font-size: 1.4rem;
  font-weight: 500;
  gap: 1.2rem;
`;

const UserAvatarWrapper = styled.div`
  border-radius: 100%;
  border: 1px solid var(--border-non-interactive);
  display: inline-block;
  height: ${(props) => (props.$size ? `${props.$size}rem` : '4rem')};
  overflow: hidden;
  width: ${(props) => (props.$size ? `${props.$size}rem` : '4rem')};
`;

const Avatar = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

const UserDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

function UserAvatar({
  firstName,
  lastName,
  email,
  avatarUrl,
  variation,
  size,
}) {
  const fallbackAvatarBg = '86ead4';
  const fallbackAvatarColor = '86e16433cad4';
  const fallbackAvatarUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&uppercase=true&bold=true&color=${fallbackAvatarColor}&background=${fallbackAvatarBg}&format=svg&rounded=true`;

  if (variation === 'full')
    return (
      <StyledUserAvatar>
        <UserAvatarWrapper $size={size}>
          <Avatar
            src={avatarUrl || fallbackAvatarUrl}
            alt={`${firstName} ${lastName}'s avatar`}
          />
        </UserAvatarWrapper>
        <UserDetails>
          <Text as="span" size="subtle-medium">
            {`${firstName} ${lastName}`}
          </Text>
          <Text as="span" size="detail">
            {email}
          </Text>
        </UserDetails>
      </StyledUserAvatar>
    );

  if (variation === 'reversed')
    return (
      <StyledUserAvatar>
        <UserDetails>
          <Text as="span" size="subtle-medium">
            {`${firstName} ${lastName}`}
          </Text>
        </UserDetails>
        <UserAvatarWrapper $size={size}>
          <Avatar
            src={avatarUrl || fallbackAvatarUrl}
            alt={`${firstName} ${lastName}'s avatar`}
          />
        </UserAvatarWrapper>
      </StyledUserAvatar>
    );

  return (
    <StyledUserAvatar>
      <UserAvatarWrapper $size={size}>
        <Avatar
          src={avatarUrl || fallbackAvatarUrl}
          alt={`${firstName} ${lastName}'s avatar`}
        />
      </UserAvatarWrapper>
      <UserDetails>
        <Text as="span" size="subtle-medium">
          {`${firstName} ${lastName}`}
        </Text>
      </UserDetails>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
