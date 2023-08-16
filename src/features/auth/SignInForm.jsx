import { styled } from 'styled-components';

import Text from '../../ui/Text';

const StyledSignInForm = styled.div`
  padding: 3.2rem 0;
`;

function SignInForm() {
  return (
    <StyledSignInForm>
      <Text as="h1" size="xlarge">
        Welcome back!
      </Text>
      <Text as="p" size="normal">
        Sign in to continue.
      </Text>
    </StyledSignInForm>
  );
}

export default SignInForm;
