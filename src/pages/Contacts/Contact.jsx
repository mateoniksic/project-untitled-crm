import { useEffect } from 'react';

import MainContainer from '../../ui/MainContainer';

import { useApp } from '../../hooks/useApp';

function Contact() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contact'));

  return <MainContainer>Contact</MainContainer>;
}

export default Contact;
