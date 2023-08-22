import { styled } from 'styled-components';
import { MailIcon } from 'lucide-react';

import { useState } from 'react';

import Text from '../../../components/Text';
import FormRow from '../../../components/FormRow';
import { Input } from '../../../components/Input';
import Button from '../../../components/Button';
import { signIn } from '../../../services/apiAuth';
import { useSignIn } from '../hooks/useSignIn';

const StyledSignInForm = styled.form`
  padding: 3.2rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;
  width: 100%;
  gap: 2.4rem;
`;

const FormHeader = styled.div``;
const FormMain = styled.div`
  align-items: start;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.6rem;
  justify-content: start;
`;
const FormFooter = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: stretch;
`;

function SignInForm() {
  const [email, setEmail] = useState('mateo.niksic@student.uniri.hr');
  const [password, setPassword] = useState('0000');

  const { signIn, isLoadingSignIn } = useSignIn();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    signIn(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }

  return (
    <StyledSignInForm onSubmit={handleSubmit}>
      <FormHeader>
        <Text as="h1" size="xlarge">
          Welcome back!
        </Text>
        <Text as="p" size="normal">
          Sign in to continue.
        </Text>
      </FormHeader>
      <FormMain>
        <FormRow label="Email">
          <Input
            type="email"
            id="email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoadingSignIn}
          />
        </FormRow>
        <FormRow label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoadingSignIn}
          />
        </FormRow>
      </FormMain>
      <FormFooter>
        <Button variation="primary" type="submit" disabled={isLoadingSignIn}>
          <MailIcon size="20" />
          Sign in with email
        </Button>
      </FormFooter>
    </StyledSignInForm>
  );
}

export default SignInForm;
