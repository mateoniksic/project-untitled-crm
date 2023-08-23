import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form';

function UpdateProfileForm() {
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
        <Form.Row
          label="Click to upload avatar."
          type="file"
          error={errors?.user_avatar?.message}>
          <Form.InputFile
            accept=".jpg, .jpeg, .png"
            id="avatar"
            {...register('user_avatar')}
          />
        </Form.Row>
        <Form.Row label="First name" error={errors?.user_first_name?.message}>
          <Form.Input
            type="text"
            id="fname"
            disabled={''}
            {...register('user_first_name')}
          />
        </Form.Row>
        <Form.Row label="Last name" error={errors?.user_last_name?.message}>
          <Form.Input
            type="text"
            id="lname"
            disabled={''}
            {...register('user_last_name')}
          />
        </Form.Row>
      </Form.Main>
      <Form.Footer>
        <Form.Button variation="primary" disabled={''}>
          Save changes
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default UpdateProfileForm;
