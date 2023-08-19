import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import Spinner from '../../components/common/Spinner';
import ContactRow from './ContactRow';

import { getContacts } from '../../services/apiContacts';
import { useEffect } from 'react';
import { useContacts } from './hooks/useContacts';

const TableWrapper = styled.div`
  align-items: start;
  display: flex;
  justify-content: start;
  overflow: auto;
  width: 100%;
`;

const Table = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 0.6rem;
  border: 1px solid var(--border-non-interactive);
  font-size: 1.4rem;
  min-width: 120rem;
  overflow: hidden;
  width: 100%;
`;

const TableHeader = styled.header`
  align-items: center;
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  color: var(--text-lc);
  column-gap: 2.4rem;
  display: grid;
  font-weight: 600;
  grid-template-columns: 0.85fr 1fr 0.7fr 0.6fr 0.5fr 0.5fr;
  letter-spacing: 0.4px;
  padding: 1.6rem 2.4rem;
  text-transform: uppercase;
`;

function ContactsTable({ setTotalContacts }) {
  const { isLoading, contacts } = useContacts();

  useEffect(() => setTotalContacts(contacts?.length));

  if (isLoading)
    return (
      <TableWrapper>
        <Spinner />
      </TableWrapper>
    );

  return (
    <TableWrapper>
      <Table role="table">
        <TableHeader role="row">
          <div>Full name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Created by</div>
          <div>Created at</div>
        </TableHeader>
        {contacts.map((contact) => (
          <ContactRow contactPacked={contact} key={contact.contact_id} />
        ))}
      </Table>
    </TableWrapper>
  );
}

export default ContactsTable;
