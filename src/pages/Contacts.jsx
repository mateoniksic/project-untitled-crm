import { useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import ContactTable from '../features/contacts/ContactTable';

function Contacts() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contacts'));

  return <ContactTable />;
}

export default Contacts;
