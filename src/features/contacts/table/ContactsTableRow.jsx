import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDeleteContact } from '../hooks/useDeleteContact';
import ProfileCard from '../../../components/ProfileCard';
import DeleteContact from '../actions/DeleteContact';
import UpdateContact from '../actions/UpdateContact';
import Menus from '../../../components/Menus';
import { formatDate } from '../../../utils/helpers';

const TableRow = styled.div`
  align-items: center;
  column-gap: 2.4rem;
  display: grid;
  font-size: 1.4rem;
  font-weight: 500;
  grid-template-columns:
    minmax(20rem, 1fr) minmax(20rem, 1fr) minmax(12.5rem, 0.7fr)
    minmax(20rem, 1fr) minmax(10.5rem, 0.65fr) 3.6rem;
  line-height: 2rem;
  padding: 1.4rem 2.4rem;

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

function ContactsTableRow({ contactDetails }) {
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
          <Menus.Menu>
            <Menus.Toggle id={contact.contact_id}></Menus.Toggle>
            <Menus.List id={contact.contact_id}>
              <Menus.Item>
                <UpdateContact contactToUpdate={contact}>Update</UpdateContact>
              </Menus.Item>
              <Menus.Item>
                <DeleteContact
                  id={contact.contact_id}
                  resourceName={[
                    contact.contact_first_name,
                    contact.contact_last_name,
                  ].join(' ')}
                  disabled={isDeletingContact}
                  onDelete={() =>
                    deleteContact({ contactId: contact.contact_id })
                  }>
                  Delete
                </DeleteContact>
              </Menus.Item>
            </Menus.List>
          </Menus.Menu>
        </ActionsColumn>
      </TableRow>
    </>
  );
}

export default ContactsTableRow;
