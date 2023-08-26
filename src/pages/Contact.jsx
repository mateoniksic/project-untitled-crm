import { styled } from 'styled-components';
import { ChevronLeftIcon } from 'lucide-react';
import { useUser } from '../features/auth/useUser';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import { useContact } from '../features/contacts/useContact';
import { useContactDeals } from '../features/contacts/useContactDeals';
import Text from '../ui/Text';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import ContactCard from '../features/contacts/ContactCard';
import DealCard from '../features/deals/DealCard';

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
  const navigate = useNavigate();
  const { contactId } = useParams();
  const {
    user: { workspace_id: workspaceId },
  } = useUser();
  const { contact, isLoadingContact } = useContact({ contactId, workspaceId });
  const { contactDeals, isLoadingContactDeals } = useContactDeals(contactId);
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contact'));

  if (isLoadingContact || isLoadingContactDeals)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  return (
    <StyledContact>
      <Button variation={'neutral'} onClick={() => navigate(-1)}>
        <ChevronLeftIcon />
        Go back
      </Button>
      <ContactCard contactDetails={contact} />
      <ContactDeals>
        <Text size="large">Deals</Text>
        {!contactDeals.length && (
          <Text size="subtle-semibold">
            This contact doesn&apos;t have any deals.
          </Text>
        )}
        {contactDeals.map((deal) => (
          <DealCard key={deal.deal_id} dealDetails={deal} />
        ))}
      </ContactDeals>
    </StyledContact>
  );
}

export default Contact;
