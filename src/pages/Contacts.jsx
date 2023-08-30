import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useApp } from '../hooks/useApp';
import ContactTable from '../features/contacts/ContactTable';
import AddContact from '../features/contacts/ContactAdd';
import Text from '../ui/Text';

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
  const [totalContacts, setTotalContacts] = useState('');
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contacts'));

  return (
    <StyledContacts>
      <ContactsHeader>
        <Text size="large" as="h2">
          Total contacts ({totalContacts})
        </Text>
        <AddContact />
      </ContactsHeader>
      <ContactTable setTotalContacts={setTotalContacts} />
    </StyledContacts>
  );
}

export default Contacts;
