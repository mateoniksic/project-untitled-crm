import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { PlusCircleIcon } from 'lucide-react';

import MainContainer from '../../components/layout/MainContainer';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import ContactsTable from '../../features/contacts/ContactsTable';
import ContactForm from '../../features/contacts/ContactForm';

import { useApp } from '../../hooks/useApp';

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
  const [showForm, setShowForm] = useState(false);

  return (
    <MainContainer>
      <ContactsHeader>
        <Text>Total contacts ({totalContacts})</Text>
        <Button variation="primary" onClick={() => setShowForm(!showForm)}>
          <PlusCircleIcon size="16" />
          New contact
        </Button>
      </ContactsHeader>
      <ContactsTable setTotalContacts={setTotalContacts} />
      {showForm && <ContactForm />}
    </MainContainer>
  );
}

export default Contacts;
