import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useUser } from '../../auth/useUser';
import { useBusinessProfile } from './useBusinessProfile';
import { useUpdateBusinessProfile } from './useUpdateBusinessProfile';
import Form from '../../../ui/Form';
import Spinner from '../../../ui/Spinner';

function UpdateBusinessForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    user: { workspace_id: workspaceId },
  } = useUser();

  const { businessProfile, isLoadingBussinessProfile } = useBusinessProfile({
    workspaceId,
  });

  useEffect(() => reset(businessProfile), [reset, businessProfile]);

  const { updateBusinessProfile, isUpdatingBusinessProfile } =
    useUpdateBusinessProfile();

  function onSubmit(data) {
    updateBusinessProfile({ businessProfile: data, workspaceId });
  }

  function onError(error) {
    console.log(error);
  }

  if (isLoadingBussinessProfile)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Rows>
        <Form.Row
          label="Business name"
          error={errors?.business_profile_name?.message}>
          <Form.Input
            type="text"
            id="business_profile_name"
            disabled={isUpdatingBusinessProfile}
            {...register('business_profile_name')}
          />
        </Form.Row>
        <Form.Row
          label="Business email"
          error={errors?.business_profile_email?.message}>
          <Form.Input
            type="text"
            id="business_profile_email"
            disabled={isUpdatingBusinessProfile}
            {...register('business_profile_email')}
          />
        </Form.Row>
        <Form.Row
          label="Business phone"
          error={errors?.business_profile_phone?.message}>
          <Form.Input
            type="text"
            id="business_profile_phone"
            disabled={isUpdatingBusinessProfile}
            {...register('business_profile_phone')}
          />
        </Form.Row>
        <Form.Row
          label="Business website"
          error={errors?.business_profile_website?.message}>
          <Form.Input
            type="text"
            id="business_profile_website"
            disabled={isUpdatingBusinessProfile}
            {...register('business_profile_website')}
          />
        </Form.Row>
      </Form.Rows>
      <Form.Footer>
        <Form.Button variation="primary" disabled={isUpdatingBusinessProfile}>
          Save changes
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default UpdateBusinessForm;
