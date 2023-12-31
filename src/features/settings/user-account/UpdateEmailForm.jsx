import { useForm } from 'react-hook-form';
import { useUser } from '../../auth/useUser';
import { useUpdateUser } from './useUpdateUser';
import Form from '../../../ui/Form';

function UpdateEmailForm() {
  const {
    user: { email },
  } = useUser();

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm({ defaultValues: { email } });

  const { updateUser, isLoadingUpdateUser } = useUpdateUser();

  function onSubmit({ email }) {
    updateUser({ email });
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Rows>
        <Form.Row label="Email" error={errors?.email?.message}>
          <Form.Input
            type="email"
            id="email"
            disabled={isLoadingUpdateUser}
            {...register('email', {
              required: 'This field is required.',
              pattern: {
                value: '^[w-.]+@([w-]+.)+[w-]{2,4}$',
                message: 'Please provide a valid email.',
              },
            })}
          />
        </Form.Row>
        <Form.Row label="Confirm email" error={errors?.confirmEmail?.message}>
          <Form.Input
            type="email"
            id="email-confirm"
            disabled={isLoadingUpdateUser}
            {...register('confirmEmail', {
              required: 'This field is required.',
              validate: (value) =>
                value === getValues().email || 'Emails need to match.',
            })}
          />
        </Form.Row>
      </Form.Rows>
      <Form.Footer>
        <Form.Button variation="primary" disabled={isLoadingUpdateUser}>
          Change email
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default UpdateEmailForm;
