import styled from 'styled-components';
import { Trash2Icon, PenBoxIcon, EyeIcon } from 'lucide-react';

import { useState } from 'react';

import UserAvatar from '../auth/UserAvatar';
import ContactForm from './ContactForm';
import Button from '../../ui/Button';

import { useDeleteContact } from './hooks/useDeleteContact';

const TableRow = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  display: grid;
  grid-template-columns: 0.85fr 1fr 0.7fr 0.6fr 0.5fr 0.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border-non-interactive);
  }
`;

const CreatedBy = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
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
        <CreatedBy>
          <div>
            <UserAvatar
              firstName={user_profile.user_first_name}
              lastName={user_profile.user_last_name}
              avatarUrl={user_profile.user_avatar_url}
              size="3.2"
            />
          </div>
        </CreatedBy>
        <div>
          {new Date(contact.contact_created_at).toLocaleString('hr-HR')}
        </div>
        <Actions>
          <Button variation="neutral" to={`${contact.contact_id}`}>
            <EyeIcon size="16" />
          </Button>
          <Button variation="primary" onClick={() => setShowForm(!showForm)}>
            <PenBoxIcon size="16" />
          </Button>
          <Button
            variation="danger"
            onClick={() => deleteContact(contact.contact_id)}
            disabled={isDeleting}>
            <Trash2Icon size="16" />
          </Button>
        </Actions>
      </TableRow>
      {showForm && <ContactForm contactToEdit={contact} />}
    </>
  );
}

export default ContactRow;
