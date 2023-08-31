import { styled } from 'styled-components';
import Text from './Text';

const StyledProfileCard = styled.div`
  align-items: center;
  color: var(--color-grey-600);
  display: flex;
  gap: 1.2rem;
`;

const ProfileCardWrapper = styled.div`
  border-radius: 100%;
  border: 1px solid var(--border-non-interactive);
  display: inline-block;
  height: ${(props) => (props.$size ? `${props.$size}rem` : '3.6rem')};
  overflow: hidden;
  width: ${(props) => (props.$size ? `${props.$size}rem` : '3.6rem')};
`;

const Avatar = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

function ProfileCard({
  firstName,
  lastName,
  email,
  avatarUrl,
  variation,
  size,
}) {
  const fallbackAvatarUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&uppercase=true&bold=true&color=86e16433cad4&background=86ead4&format=svg&rounded=true`;

  if (variation === 'full')
    return (
      <StyledProfileCard>
        <ProfileCardWrapper $size={size}>
          <Avatar
            src={avatarUrl || fallbackAvatarUrl}
            alt={`${firstName} ${lastName}'s avatar`}
          />
        </ProfileCardWrapper>
        <ProfileDetails>
          <Text as="span" size="subtle-medium">
            {`${firstName} ${lastName}`}
          </Text>
          <Text as="span" size="detail">
            {email}
          </Text>
        </ProfileDetails>
      </StyledProfileCard>
    );

  if (variation === 'reversed')
    return (
      <StyledProfileCard>
        <ProfileDetails>
          <Text as="span" size="subtle-medium">
            {`${firstName} ${lastName}`}
          </Text>
        </ProfileDetails>
        <ProfileCardWrapper $size={size}>
          <Avatar
            src={avatarUrl || fallbackAvatarUrl}
            alt={`${firstName} ${lastName}'s avatar`}
          />
        </ProfileCardWrapper>
      </StyledProfileCard>
    );

  return (
    <StyledProfileCard>
      <ProfileCardWrapper $size={size}>
        <Avatar
          src={avatarUrl || fallbackAvatarUrl}
          alt={`${firstName} ${lastName}'s avatar`}
        />
      </ProfileCardWrapper>
      <ProfileDetails>
        <Text as="span" size="detail">
          {`${firstName} ${lastName}`}
        </Text>
      </ProfileDetails>
    </StyledProfileCard>
  );
}

export default ProfileCard;
