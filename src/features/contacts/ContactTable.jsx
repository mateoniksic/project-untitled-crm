import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useUser } from '../auth/useUser';
import { useContactsTable } from './useContactsTable';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import ContactTableRow from './ContactTableRow';
import Text from '../../ui/Text';
import Pagination from '../../ui/Pagination';
import Form from '../../ui/Form';
import { useSearchParams } from 'react-router-dom';

const StyledContactsTable = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;
  gap: 2.4rem;
`;

function ContactTable({ setTotalContacts }) {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();
  const { contacts, count, isLoadingContacts } = useContactsTable({
    workspaceId,
  });
  useEffect(() => setTotalContacts(count));
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    searchParams.delete('page');
    setSearchParams(searchParams);
  }

  if (isLoadingContacts)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  return (
    <StyledContactsTable>
      <Form onSubmit={handleSubmit}>
        <Form.Rows>
          <Form.Input
            type="text"
            id="search-contacts"
            placeholder="Search contacts by name..."
            defaultValue={searchParams.get('search') ?? ''}
            onChange={(e) => {
              const queryValue = e.target.value.trim().toLowerCase();
              if (!queryValue) {
                searchParams.delete('search');
              } else {
                searchParams.set('search', queryValue);
              }
            }}
          />
        </Form.Rows>
      </Form>
      <Table.Wrapper>
        <Table
          role="table"
          columns="minmax(16rem, 0.4fr) minmax(18rem, 0.75fr) minmax(10rem, 0.5fr) 
                   minmax(16rem, 0.5fr) minmax(10rem, 0.5fr) 6.8rem;">
          <Table.Header role="row">
            <Table.Column>Full name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Phone</Table.Column>
            <Table.Column>Created by</Table.Column>
            <Table.Column>Created at</Table.Column>
          </Table.Header>
          <Table.Body
            data={contacts}
            render={(contact) => (
              <ContactTableRow
                contactDetails={contact}
                key={contact.contact_id}
              />
            )}
          />
          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        </Table>
      </Table.Wrapper>
    </StyledContactsTable>
  );
}

export default ContactTable;
