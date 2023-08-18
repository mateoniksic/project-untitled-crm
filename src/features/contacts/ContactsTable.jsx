import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import Spinner from '../../ui/Spinner';
import ContactRow from './ContactRow';

import { getContacts } from '../../services/apiContacts';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--border-non-interactive);
  border-radius: 7px;
  overflow: hidden;
  min-width: max-content;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.7fr 0.6fr 0.5fr 0.5fr;
  column-gap: 2.4rem;
  align-items: start;

  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--text-lc);
  padding: 1.6rem 2.4rem;
`;

function ContactsTable() {
  const {
    data: contacts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
  });

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Full name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Created by</div>
        <div>Created at</div>
      </TableHeader>
      {contacts.map((contact) => (
        <ContactRow contact={contact} key={contact.contact_id} />
      ))}
    </Table>
  );
}

export default ContactsTable;
