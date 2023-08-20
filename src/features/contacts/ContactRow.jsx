import styled from 'styled-components';
import { Trash2Icon, PenBoxIcon, EyeIcon } from 'lucide-react';

import { useState } from 'react';

import UserAvatar from '../auth/UserAvatar';
import ContactForm from './ContactForm';
import Button from '../../components/common/Button';

import { useDeleteContact } from './hooks/useDeleteContact';
import UpdateContact from './UpdateContact';
import DeleteContact from './DeleteContact';

const TableRow = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  display: grid;
  grid-template-columns:
    minmax(20rem, 1fr) minmax(20rem, 1fr) minmax(12.5rem, 0.7fr)
    minmax(20rem, 1fr) minmax(10.5rem, 0.65fr) minmax(16rem, 0.5fr);
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border-non-interactive);
  }
`;

const Actions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
`;

function ContactRow({ contactPacked }) {
  const { user_profile, ...contact } = contactPacked;

  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteContact } = useDeleteContact();

  return (
    <>
      <TableRow role="row">
        <div>
          <UserAvatar
            firstName={contact.contact_first_name}
            lastName={contact.contact_last_name}
            avatarUrl={contact.contact_avatar}
            size="3.2"
          />
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
        <Actions>
          <Button variation="neutral" to={`${contact.contact_id}`}>
            <EyeIcon size="16" />
          </Button>
          <UpdateContact contactToUpdate={contact} />
          <DeleteContact
            id={contact.contact_id}
            resourceName={[
              contact.contact_first_name,
              contact.contact_last_name,
            ].join(' ')}
            disabled={isDeleting}
            onDelete={deleteContact}
          />
        </Actions>
      </TableRow>
      {showForm && <ContactForm contactToEdit={contact} />}
    </>
  );
}

export default ContactRow;
