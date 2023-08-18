import { useEffect } from 'react';
import { PlusCircleIcon } from 'lucide-react';
import MainContainer from '../../ui/MainContainer';
import Button from '../../ui/Button';
import ContactsTable from '../../features/contacts/ContactsTable';

import { useApp } from '../../hooks/useApp';

function Contacts() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contacts'));

  return (
    <MainContainer>
      <span>Contacts</span>
      <ContactsTable />
    </MainContainer>
  );
}

export default Contacts;
