import { styled } from 'styled-components';
import { ChevronLeftIcon } from 'lucide-react';
import { useUser } from '../features/auth/useUser';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import { useContact } from '../features/contacts/useContact';

import Text from '../ui/Text';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import ContactDetails from '../features/contacts/ContactDetails';
import DealDetails from '../features/deals/DealDetails';

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
    user: { workspace_id: workspaceId },
  } = useUser();

  const {
    data: { contact, deals },
    isLoading,
  } = useContact({ contactId, workspaceId });

  if (isLoading)
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
      <ContactDetails contactDetails={contact} />
      <ContactDeals>
        <Text size="large">Deals</Text>
        {!deals.length && (
          <Text size="subtle-semibold">
            This contact doesn&apos;t have any deals.
          </Text>
        )}
        {deals.map((deal) => (
          <DealDetails key={deal.deal_id} dealDetails={deal} />
        ))}
      </ContactDeals>
    </StyledContact>
  );
}

export default Contact;
