import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDeleteContact } from './useDeleteContact';
import { formatDate } from '../../utils/helpers';
import ProfileCard from '../../ui/ProfileCard';
import ContactDelete from './ContactDelete';
import ContactUpdate from './ContactUpdate';

const TableRow = styled.div`
  align-items: center;
  column-gap: 2.4rem;
  display: grid;
  font-size: 1.2rem;
  font-weight: 600;
  grid-template-columns:
    minmax(16rem, 0.4fr) minmax(18rem, 0.75fr)
    minmax(10rem, 0.5fr) minmax(16rem, 0.5fr) minmax(10rem, 0.5fr) 6.8rem;
  line-height: 2rem;
  padding: 0.8rem 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border-non-interactive);
  }
`;

const ActionsColumn = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
`;

function ContactTableRow({ contactDetails }) {
  const { user_profile, ...contact } = contactDetails;
  const { deleteContact, isDeletingContact } = useDeleteContact();

  return (
    <>
      <TableRow role="row">
        <div>
          <Link to={`${contact.contact_id}`}>
            <ProfileCard
              firstName={contact.contact_first_name}
              lastName={contact.contact_last_name}
              avatarUrl={contact.contact_avatar}
              size="3.2"
            />
          </Link>
        </div>
        <div>{contact.contact_email}</div>
        <div>{contact.contact_phone}</div>
        <div>
          <ProfileCard
            firstName={user_profile?.user_profile_first_name}
            lastName={user_profile?.user_profile_last_name}
            avatarUrl={user_profile?.user_profile_avatar}
            size="3.2"
          />
        </div>
        <div>{formatDate(contact.contact_created_at)}</div>
        <ActionsColumn>
          <ContactUpdate contactToUpdate={contact} />
          <ContactDelete
            id={contact.contact_id}
            resourceName={[
              contact.contact_first_name,
              contact.contact_last_name,
            ].join(' ')}
            disabled={isDeletingContact}
            onDelete={deleteContact}
          />
        </ActionsColumn>
      </TableRow>
    </>
  );
}

export default ContactTableRow;
