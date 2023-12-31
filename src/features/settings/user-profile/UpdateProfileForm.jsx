import { useForm } from 'react-hook-form';
import { useUser } from '../../auth/useUser';
import Form from '../../../ui/Form';
import { useUserProfile } from './useUserProfile';
import { useEffect } from 'react';
import { useUpdateUserProfile } from './useUpdateUserProfile';
import Spinner from '../../../ui/Spinner';

function UpdateProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    user: { id: userId },
  } = useUser();

  const { userProfile, isLoadingUserProfile } = useUserProfile({ userId });
  useEffect(() => reset(userProfile), [reset, userProfile]);

  const { updateUserProfile, isUpdatingUserProfile } = useUpdateUserProfile();

  function onSubmit(data) {
    updateUserProfile({ userProfile: data, userId });
  }

  function onError(error) {
    console.log(error);
  }

  if (isLoadingUserProfile)
    <Spinner.Wrapper>
      <Spinner />
    </Spinner.Wrapper>;

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Rows>
        <Form.Row
          label="Click to upload avatar."
          type="file"
          error={errors?.user_profile_avatar?.message}>
          <Form.InputFile
            accept=".jpg, .jpeg, .png"
            id="avatar"
            {...register('user_profile_avatar')}
          />
        </Form.Row>
        <Form.Row
          label="First name"
          error={errors?.user_profile_first_name?.message}>
          <Form.Input
            type="text"
            id="fname"
            disabled={isUpdatingUserProfile}
            {...register('user_profile_first_name')}
          />
        </Form.Row>
        <Form.Row
          label="Last name"
          error={errors?.user_profile_last_name?.message}>
          <Form.Input
            type="text"
            id="lname"
            disabled={isUpdatingUserProfile}
            {...register('user_profile_last_name')}
          />
        </Form.Row>
      </Form.Rows>
      <Form.Footer>
        <Form.Button variation="primary" disabled={isUpdatingUserProfile}>
          Save changes
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default UpdateProfileForm;
