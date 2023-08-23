import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form';

function UpdateEmailForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit() {}

  function onError(error) {
    console.log(error);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Main>
        <Form.Row label="Email" error={errors?.email?.message}>
          <Form.Input
            type="email"
            id="email"
            disabled={''}
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
            disabled={''}
            {...register('confirmEmail', {
              required: 'This field is required.',
              validate: (value) =>
                value === getValues().email || 'Emails need to match.',
            })}
          />
        </Form.Row>
      </Form.Main>
      <Form.Footer>
        <Form.Button variation="primary" disabled={''}>
          Change email
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default UpdateEmailForm;
