import { useEffect } from 'react';

import { useApp } from '../../context/AppContext';

function Contact() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contact'));

  return <div>Contact</div>;
}

export default Contact;
