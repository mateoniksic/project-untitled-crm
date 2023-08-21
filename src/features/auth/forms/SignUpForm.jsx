import { styled } from 'styled-components';

import Text from '../../../components/Text';

const StyledSignUpForm = styled.div`
  padding: 3.2rem 0;
`;
function SignUpForm() {
  return (
    <StyledSignUpForm>
      <Text as="h1" size="xlarge">
        Create an account.
      </Text>
      <Text as="p" size="normal">
        And start scaling your business to the next level.
      </Text>
    </StyledSignUpForm>
  );
}

export default SignUpForm;
