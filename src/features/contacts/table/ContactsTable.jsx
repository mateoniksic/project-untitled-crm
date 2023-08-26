import { useEffect } from 'react';
import { useUser } from '../../auth/hooks/useUser';
import { useContacts } from '../hooks/useContacts';
import Spinner from '../../../components/Spinner';
import Table from '../../../components/Table';
import ContactsTableRow from './ContactsTableRow';
import Menus from '../../../components/Menus';
import Text from '../../../components/Text';
import Pagination from '../../../components/Pagination';

function ContactsTable({ setTotalContacts }) {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();
  const { contacts, isLoadingContacts } = useContacts({ workspaceId });
  useEffect(() => setTotalContacts(contacts?.length));

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
            data={contacts}
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
  );
}

export default ContactsTable;
