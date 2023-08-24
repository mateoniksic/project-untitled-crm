import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useUser } from '../../../auth/hooks/useUser';
import { useBusinessProfile } from '../hooks/useBusinessProfile';
import { useUpdateBusinessProfile } from '../hooks/useUpdateBusinessProfile';
import Form from '../../../../components/Form';

function UpdateBusinessForm() {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();

  const { businessProfile } = useBusinessProfile(workspaceId);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: businessProfile });

  useEffect(() => reset(businessProfile), [reset, businessProfile]);

  const { updateBusinessProfile, isUpdatingBusinessProfile } =
    useUpdateBusinessProfile();

  function onSubmit(data) {
    updateBusinessProfile({ businessProfile: data, workspaceId });
  }

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
      </Form.Main>
      <Form.Footer>
        <Form.Button variation="primary" disabled={isUpdatingBusinessProfile}>
          Save changes
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default UpdateBusinessForm;
