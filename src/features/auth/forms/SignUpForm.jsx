import { styled } from 'styled-components';
import { MailIcon } from 'lucide-react';

import { useForm } from 'react-hook-form';

import Text from '../../../components/Text';
import FormRow from '../../../components/FormRow';
import { Input } from '../../../components/Input';
import Button from '../../../components/Button';

import { useSignUp } from '../hooks/useSignUp';

const StyledSignUpForm = styled.form`
  padding: 3.2rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;
  width: 100%;
  gap: 2.4rem;
`;

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
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit, onError)}>
      <div>
        <Text as="h1" size="xlarge">
          Create an account.
        </Text>
        <Text as="p" size="normal">
          And grow your business to the next level.
        </Text>
      </div>
      <FormMain>
        <FormRow label="Email" error={errors?.email?.message}>
          <Input
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
        </FormRow>
        <FormRow label="Password" error={errors?.password?.message}>
          <Input
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
        </FormRow>
        <FormRow
          label="Confirm password"
          error={errors?.passwordConfirm?.message}>
          <Input
            type="password"
            id="password-confirm"
            disabled={isLoadingSignUp}
            {...register('passwordConfirm', {
              required: 'This field is required.',
              validate: (value) =>
                value === getValues().password || 'Passwords need to match.',
            })}
          />
        </FormRow>
      </FormMain>
      <FormFooter>
        <Button variation="primary" type="submit" disabled={isLoadingSignUp}>
          <MailIcon size="20" />
          Sign up with email
        </Button>
      </FormFooter>
    </StyledSignUpForm>
  );
}

export default SignUpForm;
