import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form';

function UpdateBusinessForm() {
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
          label="Business name"
          error={errors?.business_profile_name?.message}>
          <Form.Input
            type="text"
            id="business_profile_name"
            disabled={''}
            {...register('business_profile_name')}
          />
        </Form.Row>
        <Form.Row
          label="Business email"
          error={errors?.business_profile_email?.message}>
          <Form.Input
            type="text"
            id="business_profile_email"
            disabled={''}
            {...register('business_profile_email')}
          />
        </Form.Row>
        <Form.Row
          label="Business phone"
          error={errors?.business_profile_phone?.message}>
          <Form.Input
            type="text"
            id="business_profile_phone"
            disabled={''}
            {...register('business_profile_phone')}
          />
        </Form.Row>
        <Form.Row
          label="Business website"
          error={errors?.business_profile_email?.message}>
          <Form.Input
            type="text"
            id="business_profile_website"
            disabled={''}
            {...register('business_profile_website')}
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

export default UpdateBusinessForm;
