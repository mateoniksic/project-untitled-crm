import { useForm } from 'react-hook-form';
import { MailIcon } from 'lucide-react';
import Form from '../../../components/Form';
import Text from '../../../components/Text';
import { useSignUp } from '../hooks/useSignUp';

function SignUpForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  const { signUp, isLoadingSignUp } = useSignUp();

  function onSubmit({ email, password }) {
    signUp(
      { email, password },
      {
        onSettled: reset(),
      },
    );
  }

  function onError(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Header>
        <Text as="h1" size="xlarge">
          Create an account.
        </Text>
        <Text as="p" size="normal">
          And grow your business to the next level.
        </Text>
      </Form.Header>
      <Form.Main>
        <Form.Row label="Email" error={errors?.email?.message}>
          <Form.Input
            type="email"
            id="email"
            disabled={isLoadingSignUp}
            {...register('email', {
              required: 'This field is required.',
              pattern: {
                value: '^[w-.]+@([w-]+.)+[w-]{2,4}$',
                message: 'Please provide a valid email.',
              },
            })}
          />
        </Form.Row>
        <Form.Row label="Password" error={errors?.password?.message}>
          <Form.Input
            type="password"
            id="password"
            disabled={isLoadingSignUp}
            {...register('password', {
              required: 'This field is required.',
              minLength: {
                value: 8,
                message: 'Password needs a minimum of 8 characters.',
              },
            })}
          />
        </Form.Row>
        <Form.Row
          label="Confirm password"
          error={errors?.passwordConfirm?.message}>
          <Form.Input
            type="password"
            id="password-confirm"
            disabled={isLoadingSignUp}
            {...register('passwordConfirm', {
              required: 'This field is required.',
              validate: (value) =>
                value === getValues().password || 'Passwords need to match.',
            })}
          />
        </Form.Row>
      </Form.Main>
      <Form.Footer>
        <Form.Button
          variation="primary"
          type="submit"
          disabled={isLoadingSignUp}>
          <MailIcon size="20" />
          Sign up with email
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default SignUpForm;
