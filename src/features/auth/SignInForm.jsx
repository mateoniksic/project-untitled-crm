import { MailIcon } from 'lucide-react';
import { useState } from 'react';
import { useSignIn } from './useSignIn';
import Text from '../../ui/Text';
import Form from '../../ui/Form';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <Form onSubmit={handleSubmit}>
      <Form.Header>
        <Text as="h1" size="xlarge">
          Welcome back!
        </Text>
        <Text as="p" size="normal">
          Sign in to continue.
        </Text>
      </Form.Header>
      <Form.Rows>
        <Form.Row label="Email">
          <Form.Input
            type="email"
            id="email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoadingSignIn}
          />
        </Form.Row>
        <Form.Row label="Password">
          <Form.Input
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoadingSignIn}
          />
        </Form.Row>
      </Form.Rows>
      <Form.Footer>
        <Form.Button
          variation="primary"
          type="submit"
          disabled={isLoadingSignIn}>
          <MailIcon size="20" />
          Sign in with email
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default SignInForm;
