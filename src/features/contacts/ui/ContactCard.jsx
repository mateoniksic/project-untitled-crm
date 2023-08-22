import { styled } from 'styled-components';
import { MailIcon, PhoneIcon } from 'lucide-react';

import Text from '../../../components/Text';
import AvatarCard from '../../../components/AvatarCard';
import UpdateContact from '../actions/UpdateContact';
import DeleteContact from '../actions/DeleteContact';

import { useDeleteContact } from '../hooks/useDeleteContact';
import { formatDate } from '../../../utils/helpers';

const StyledContactCard = styled.div`
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  overflow: hidden;
`;

const ContactHeader = styled.div`
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  gap: 1.6rem;
  justify-content: space-between;
  padding: 1.6rem;
`;

const ContactActions = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.8rem;
  justify-content: space-between;
  padding: 1.6rem;
`;

const ContactMain = styled.div`
  align-items: start;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.6rem;
  justify-content: start;
  padding: 2.4rem;
`;
const ContactFooter = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  border-top: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  gap: 1.6rem;
  justify-content: space-between;
  padding: 2.4rem;
`;

function ContactCard({ contactDetails }) {
  const {
    user_profile: {
      user_first_name: userFname,
      user_last_name: userLname,
      user_avatar: userAvatar,
    },
    ...contact
  } = contactDetails ?? {};

  const {
    contact_id: id,
    contact_first_name: fName,
    contact_last_name: lName,
    contact_avatar: avatar,
    contact_email: email,
    contact_phone: phone,
    contact_created_at: createdAt,
  } = contact ?? {};

  const { isDeleting, deleteContact } = useDeleteContact();

  return (
    <StyledContactCard>
      <ContactHeader>
        <AvatarCard firstName={fName} lastName={lName} avatarUrl={avatar} />
        <ContactActions>
          <UpdateContact contactToUpdate={contact} />
          <DeleteContact
            id={id}
            resourceName={[fName, lName].join(' ')}
            disabled={isDeleting}
            onDelete={deleteContact}
            redirect="/workspace/contacts/"
          />
        </ContactActions>
      </ContactHeader>

      <ContactMain>
        <Text size="subtle-medium">
          <MailIcon size="20" /> {email}
        </Text>
        <Text size="subtle-medium">
          <PhoneIcon size="20" /> {phone}
        </Text>
      </ContactMain>

      <ContactFooter>
        <AvatarCard
          firstName={userFname}
          lastName={userLname}
          avatarUrl={userAvatar}
          size="2.4"
        />
        <Text size="detail">{formatDate(createdAt)}</Text>
      </ContactFooter>
    </StyledContactCard>
  );
}

export default ContactCard;