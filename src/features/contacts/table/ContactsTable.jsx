import { useEffect } from 'react';
import { useContacts } from '../hooks/useContacts';
import Spinner from '../../../components/Spinner';
import Table from '../../../components/Table';
import ContactRow from './ContactTableRow';
import Menus from '../../../components/Menus';

function ContactsTable({ setTotalContacts }) {
  const { contacts, isLoadingContacts } = useContacts();
  useEffect(() => setTotalContacts(contacts?.length));

  if (isLoadingContacts)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
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
              <ContactRow contactDetails={contact} key={contact.contact_id} />
            )}
          />
        </Table>
      </Table.Wrapper>
    </Menus>
  );
}

export default ContactsTable;
