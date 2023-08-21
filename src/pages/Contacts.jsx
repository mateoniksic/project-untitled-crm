import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

import MainContainer from '../components/MainContainer';
import ContactsTable from '../features/contacts/table/ContactsTable';
import AddContact from '../features/contacts/actions/AddContact';
import Text from '../components/Text';

import { useApp } from '../hooks/useApp';

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
    <MainContainer>
      <ContactsHeader>
        <Text size="large" as="h2">
          Total contacts ({totalContacts})
        </Text>
        <AddContact />
      </ContactsHeader>
      <ContactsTable setTotalContacts={setTotalContacts} />
    </MainContainer>
  );
}

export default Contacts;
