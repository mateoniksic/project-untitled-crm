import { useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import ContactTable from '../features/contacts/ContactTable';

function Contacts() {
  const { updatePageTitle } = useApp();
  useEffect(() => updatePageTitle('Contacts'), [updatePageTitle]);

  return <ContactTable />;
}

export default Contacts;
