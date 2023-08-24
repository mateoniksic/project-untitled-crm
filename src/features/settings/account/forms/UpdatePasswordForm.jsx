import { useForm } from 'react-hook-form';
import { useUpdateUser } from '../hooks/useUpdateUser';
import Form from '../../../../components/Form';

function UpdatePasswordForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  const { updateUser, isLoadingUpdateUser } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password });
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Main>
        <Form.Row label="Password" error={errors?.password?.message}>
          <Form.Input
            type="password"
            id="password"
            disabled={isLoadingUpdateUser}
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
            disabled={isLoadingUpdateUser}
            {...register('passwordConfirm', {
              required: 'This field is required.',
              validate: (value) =>
                value === getValues().password || 'Passwords need to match.',
            })}
          />
        </Form.Row>
      </Form.Main>
      <Form.Footer>
        <Form.Button variation="primary" disabled={''}>
          Change password
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default UpdatePasswordForm;
