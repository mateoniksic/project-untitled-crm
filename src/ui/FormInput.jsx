import { styled } from 'styled-components';

const StyledFormInput = styled.input`
  background-color: var(--component-interactive);
  border-radius: 0.6rem;
  border: 1px solid var(--border-interactive);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  padding: 0.8rem;
  width: 100%;
`;

export { StyledFormInput as FormInput };
