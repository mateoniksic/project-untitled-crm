import { styled } from 'styled-components';

const StyledMainContainer = styled.div`
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  margin: 3.2rem;
  padding: 3.2rem;
`;

function MainContainer({ children }) {
  return <StyledMainContainer>{children}</StyledMainContainer>;
}

export default MainContainer;
