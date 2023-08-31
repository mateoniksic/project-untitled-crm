import { useUser } from '../auth/useUser';
import { useSearchParams } from 'react-router-dom';
import { useContactsTable } from './useContactsTable';
import Spinner from '../../ui/Spinner';
import ContactAdd from './ContactAdd';
import Table from '../../ui/Table';
import ContactTableRow from './ContactTableRow';
import Text from '../../ui/Text';
import Pagination from '../../ui/Pagination';
import Form from '../../ui/Form';
import Row from '../../ui/Row';

function ContactTable() {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();
  const { contacts, count, isLoadingContacts } = useContactsTable({
    workspaceId,
  });

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
    <Row
      $flexDirection="column"
      $alignItems="stretch"
      $border="1"
      $borderRadius="sm"
      $padding="3.2rem">
      <Row
        $justifyContent="space-between"
        $alignItems="center"
        $gap={'2.4rem'}
        $margin="0 0 2.4rem 0">
        <Text size="large">Total contacts ({count})</Text>
        <Row $gap={'1.6rem'}>
          <Form onSubmit={handleSubmit}>
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
          </Form>
          <ContactAdd />
        </Row>
      </Row>
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
    </Row>
  );
}

export default ContactTable;
