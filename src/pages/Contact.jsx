import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from 'lucide-react';

import { useEffect } from 'react';

import Text from '../components/Text';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import ContactCard from '../features/contacts/ui/ContactCard';

import { useApp } from '../hooks/useApp';
import { useContact } from '../features/contacts/hooks/useContact';
import { useContactDeals } from '../features/contacts/hooks/useContactDeals';
import DealCard from '../features/deals/ui/DealCard';

const StyledContact = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  gap: 3.2rem;
  justify-content: start;
  margin-inline: auto;
  max-width: 64rem;
  min-width: 56rem;
  width: 100%;
`;

const ContactDeals = styled.div`
  align-items: stretch;
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: column nowrap;
  gap: 3.2rem;
  justify-content: start;
  overflow: hidden;
  padding: 3.2rem;
`;

function Contact() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contact'));

  const navigate = useNavigate();
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

  if (isLoadingContact || isLoadingDeals)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  return (
    <StyledContact>
      <Button variation={'neutral'} onClick={() => navigate(-1)}>
        <ChevronLeftIcon />
        Return to all contacts
      </Button>
      <ContactCard contactDetails={contact} />
      <ContactDeals>
        <Text size="large">Deals</Text>
        {!deals.length && (
          <Text size="subtle-semibold">
            This contact doesn&apos;t have any deals.
          </Text>
        )}
        {deals.map((deal) => (
          <DealCard key={deal.deal_id} dealDetails={deal} />
        ))}
      </ContactDeals>
    </StyledContact>
  );
}

export default Contact;
