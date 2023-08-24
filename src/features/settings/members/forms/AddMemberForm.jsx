import { User2Icon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useSignUpMember } from '../hooks/useSignUpMember';
import { useUser } from '../../../auth/hooks/useUser';
import Form from '../../../../components/Form';

function AddMemberForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  const { signUpMember, isLoadingSignUpMember } = useSignUpMember();
  const {
    user: { workspace_id: workspaceId },
  } = useUser();

  function onSubmit(data) {
    console.log('d', data);
    signUpMember(
      { member: data, workspaceId: workspaceId },
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
      <Form.Main>
        <Form.Row label="First name" error={errors?.fname?.message}>
          <Form.Input
            type="text"
            id="fname"
            disabled={isLoadingSignUpMember}
            {...register('fname', {
              required: 'This field is required.',
            })}
          />
        </Form.Row>
        <Form.Row label="Last name" error={errors?.lname?.message}>
          <Form.Input
            type="text"
            id="lname"
            disabled={isLoadingSignUpMember}
            {...register('lname', {
              required: 'This field is required.',
            })}
          />
        </Form.Row>
        <Form.Row label="Email" error={errors?.email?.message}>
          <Form.Input
            type="email"
            id="email"
            disabled={isLoadingSignUpMember}
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
            disabled={isLoadingSignUpMember}
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
            disabled={isLoadingSignUpMember}
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
          disabled={isLoadingSignUpMember}>
          <User2Icon size="20" />
          Add member
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default AddMemberForm;
