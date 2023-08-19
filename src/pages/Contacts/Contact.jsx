import { useEffect } from 'react';

import MainContainer from '../../components/layout/MainContainer';

import { useApp } from '../../hooks/useApp';

function Contact() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contact'));

  return <MainContainer>Contact</MainContainer>;
}

export default Contact;
