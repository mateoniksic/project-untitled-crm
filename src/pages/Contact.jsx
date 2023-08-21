import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import MainContainer from '../components/MainContainer';
import Spinner from '../components/Spinner';

import { useApp } from '../hooks/useApp';
import { useContact } from '../features/contacts/hooks/useContact';
import { useContactDeals } from '../features/contacts/hooks/useContactDeals';

function Contact() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contact'));

  const { contactId } = useParams();

  const {
    contact,
    isLoading: isLoadingContact,
    error: isErrorContact,
  } = useContact(contactId);

  const {
    deals,
    isLoading: isLoadingDeals,
    error: isErrorDeals,
  } = useContactDeals(contactId);

  console.log(contact, deals);

  if (isLoadingContact || isLoadingDeals)
    return (
      <MainContainer>
        <Spinner />
      </MainContainer>
    );

  return (
    <MainContainer>
      {[contact.contact_first_name, contact.contact_last_name].join(' ')}
      <br></br>
      {deals?.map((deal) => (
        <span key={deal.deal_id}>{deal.deal_title}</span>
      ))}
    </MainContainer>
  );
}

export default Contact;
