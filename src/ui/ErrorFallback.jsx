import { styled } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Text from './Text';
import Button from './Button';

const StyledErrorFallback = styled.div`
  align-items: center;
  background-color: 'var(--bg-normal)';
  display: flex;
  flex-flow: column nowrap;
  gap: 1.6rem;
  height: 100dvh;
  justify-content: center;
  width: 100dvw;
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Text size="xlarge">Something went wrong.</Text>
        <Text size="detail">{error.message}</Text>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
