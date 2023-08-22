import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

import ContactsTable from '../features/contacts/table/ContactsTable';
import AddContact from '../features/contacts/actions/AddContact';
import Text from '../components/Text';

import { useApp } from '../hooks/useApp';

const StyledContacts = styled.div`
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  padding: 3.2rem;
`;

const ContactsHeader = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

function Contacts() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contacts'));

  const [totalContacts, setTotalContacts] = useState('');

  return (
    <StyledContacts>
      <ContactsHeader>
        <Text size="large" as="h2">
          Total contacts ({totalContacts})
        </Text>
        <AddContact />
      </ContactsHeader>
      <ContactsTable setTotalContacts={setTotalContacts} />
    </StyledContacts>
  );
}

export default Contacts;