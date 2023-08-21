import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UserAvatar from '../../auth/UserAvatar';
import DeleteContact from '../actions/DeleteContact';
import UpdateContact from '../actions/UpdateContact';

import { useDeleteContact } from '../hooks/useDeleteContact';
import Menus from '../../../components/MenuContext';

const TableRow = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  display: grid;
  grid-template-columns:
    minmax(20rem, 1fr) minmax(20rem, 1fr) minmax(12.5rem, 0.7fr)
    minmax(20rem, 1fr) minmax(10.5rem, 0.65fr) 3.6rem;
  column-gap: 2.4rem;
  align-items: center;
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

function ContactRow({ contactDetails }) {
  const { user_profile, ...contact } = contactDetails;
  const { isDeleting, deleteContact } = useDeleteContact();

  return (
    <>
      <TableRow role="row">
        <div>
          <Link to={`${contact.contact_id}`}>
            <UserAvatar
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
          <UserAvatar
            firstName={user_profile.user_first_name}
            lastName={user_profile.user_last_name}
            avatarUrl={user_profile.user_avatar_url}
            size="3.2"
          />
        </div>
        <div>
          {new Date(contact.contact_created_at).toLocaleString('hr-HR')}
        </div>
        <ActionsColumn>
          <Menus.Menu>
            <Menus.Toggle id={contact.contact_id}></Menus.Toggle>
            <Menus.List id={contact.contact_id}>
              <Menus.Item>
                <UpdateContact contactToUpdate={contact} />
              </Menus.Item>
              <Menus.Item>
                <DeleteContact
                  id={contact.contact_id}
                  resourceName={[
                    contact.contact_first_name,
                    contact.contact_last_name,
                  ].join(' ')}
                  disabled={isDeleting}
                  onDelete={deleteContact}
                />
              </Menus.Item>
            </Menus.List>
          </Menus.Menu>
        </ActionsColumn>
      </TableRow>
    </>
  );
}

export default ContactRow;
