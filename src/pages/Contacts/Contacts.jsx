import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

import MainContainer from '../../components/layout/MainContainer';

import Text from '../../components/common/Text';
import ContactsTable from '../../features/contacts/ContactsTable';

import { useApp } from '../../hooks/useApp';
import AddContact from '../../features/contacts/AddContact';

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
        <Text>Total contacts ({totalContacts})</Text>
        <AddContact />
      </ContactsHeader>
      <ContactsTable setTotalContacts={setTotalContacts} />
    </MainContainer>
  );
}

export default Contacts;
