import { styled } from 'styled-components';

const StyledContactsTableOperations = styled.div`
  padding: 0rem 1.6rem;
  margin-bottom: 1.6rem;
`;

function ContactsTableOperations() {
  return (
    <StyledContactsTableOperations>
      <button>Filter</button>
    </StyledContactsTableOperations>
  );
}

export default ContactsTableOperations;
