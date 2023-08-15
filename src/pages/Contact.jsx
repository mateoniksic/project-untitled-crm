import { useEffect } from 'react';

import { useApp } from '../context/AppContext';

function Contact() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Dashboard'));

  return <div>Contact</div>;
}

export default Contact;
