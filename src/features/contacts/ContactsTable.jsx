import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useUser } from '../auth/useUser';
import { useContacts } from './useContacts';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import ContactsTableRow from './ContactsTableRow';
import Menus from '../../ui/Menus';
import Text from '../../ui/Text';
import Pagination from '../../ui/Pagination';
import Form from '../../ui/Form';

const StyledContactsTable = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;
  gap: 2.4rem;
`;

function ContactsTable({ setTotalContacts }) {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();
  const { contacts, isLoadingContacts } = useContacts({ workspaceId });
  useEffect(() => setTotalContacts(contacts?.length));
  const [search, setSearch] = useState('');

  if (isLoadingContacts)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  if (!contacts.length)
    return (
      <Text size="subtle">
        You don&apos;t have any contacts. Click on &apos;New contact&apos;
        button to create a new contact.
      </Text>
    );

  return (
    <StyledContactsTable>
      <Form.Rows>
        <Form.Input
          type="text"
          id="search-contacts"
          placeholder="Search contacts by name..."
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        />
      </Form.Rows>
      <Menus>
        <Table.Wrapper>
          <Table
            role="table"
            columns="minmax(20rem, 1fr) minmax(20rem, 1fr) minmax(12.5rem, 0.7fr) minmax(20rem, 1fr) minmax(10.5rem, 0.65fr) 3.6rem;">
            <Table.Header role="row">
              <Table.Column>Full name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Phone</Table.Column>
              <Table.Column>Created by</Table.Column>
              <Table.Column>Created at</Table.Column>
            </Table.Header>
            <Table.Body
              data={contacts.filter((contact) =>
                search === ''
                  ? contact
                  : [contact.contact_first_name, contact.contact_last_name]
                      .join(' ')
                      .toLowerCase()
                      .includes(search),
              )}
              render={(contact) => (
                <ContactsTableRow
                  contactDetails={contact}
                  key={contact.contact_id}
                />
              )}
            />
            <Table.Footer>
              <Pagination count={contacts.length} />
            </Table.Footer>
          </Table>
        </Table.Wrapper>
      </Menus>
    </StyledContactsTable>
  );
}

export default ContactsTable;
