import { styled } from 'styled-components';
import { LogOutIcon } from 'lucide-react';

import { useSignOut } from '../hooks/useSignOut.js';

const StyledButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  font-size: 1.4rem;
  font-weight: 500;
  gap: 0.8rem;
  line-height: 2rem;
  padding: 0.8rem;
  transition: all 0.3s;
  width: 100%;

  &:hover,
  &:active {
    background-color: var(--component-selected);
    border-radius: var(--border-radius-sm);
  }

  &:focus {
    outline: none;
  }
`;

function SignOut() {
  const { signOut, isLoadingSignOut } = useSignOut();

  return (
    <StyledButton onClick={signOut} disabled={isLoadingSignOut}>
      <LogOutIcon size="20" />
      Sign out
    </StyledButton>
  );
}

export default SignOut;
