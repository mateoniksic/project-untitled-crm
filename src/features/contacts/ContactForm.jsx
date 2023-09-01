import { useForm } from 'react-hook-form';
import { PlusCircleIcon, SaveIcon, User2Icon } from 'lucide-react';
import { useUser } from '../auth/useUser';
import { useUserProfile } from '../settings/user-profile/useUserProfile';
import { useCreateContact } from './useCreateContact';
import { useUpdateContact } from './useUpdateContact';
import Spinner from '../../ui/Spinner';
import Form from '../../ui/Form';
import Button from '../../ui/Button';

function ContactForm({ contactToUpdate = {}, onCloseModal }) {
  const { contact_id: updateId, ...editValues } = contactToUpdate;
  const isUpdateSession = Boolean(updateId);

  const {
    user: { id: userId, workspace_id: workspaceId },
    isLoadingUser,
  } = useUser();

  const {
    userProfile: { user_profile_id: userProfileId },
    isLoadingUserProfile,
  } = useUserProfile({ userId });

  const isLoading = isLoadingUser || isLoadingUserProfile;

  const defaultValues = isUpdateSession ? editValues : {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  const { createContact, isCreatingContact } = useCreateContact();
  const { updateContact, isUpdatingContact } = useUpdateContact();
  const isProcessing = isCreatingContact || isUpdatingContact;

  function onSubmit(data) {
    if (isUpdateSession) {
      updateContact(
        {
          contact: {
            ...data,
            contact_created_by: userProfileId,
            workspace_id: workspaceId,
            contact_id: updateId,
          },
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      createContact(
        {
          contact: {
            ...data,
            contact_created_by: userProfileId,
            workspace_id: workspaceId,
          },
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    }
  }

  function onError(errors) {
    console.log('ContactForm errors: ', errors);
  }

  if (isLoading)
    return (
      <Form.ModalWrapper>
        <Spinner.Wrapper>
          <Spinner />
        </Spinner.Wrapper>
      </Form.ModalWrapper>
    );

  return (
    <Form.ModalWrapper>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.ModalHeader>
          <User2Icon size="24" />
          New contact
        </Form.ModalHeader>
        <Form.ModalMain>
          <Form.Rows>
            <Form.Row
              label="Click to upload avatar."
              type="file"
              error={errors?.contact_avatar?.message}>
              <Form.InputFile
                accept=".jpg, .jpeg, .png"
                id="avatar"
                {...register('contact_avatar')}
              />
            </Form.Row>
            <Form.Row
              label="First name:"
              error={errors?.contact_first_name?.message}>
              <Form.Input
                type="text"
                id="fname"
                {...register('contact_first_name', {
                  required: 'This field is required.',
                })}
              />
            </Form.Row>
            <Form.Row
              label="Last name:"
              error={errors?.contact_last_name?.message}>
              <Form.Input
                type="text"
                id="lname"
                {...register('contact_last_name', {
                  required: 'This field is required.',
                })}
              />
            </Form.Row>
            <Form.Row label="Email:" error={errors?.contact_email?.message}>
              <Form.Input
                type="text"
                id="email"
                {...register('contact_email', {
                  required: 'This field is required.',
                })}
              />
            </Form.Row>
            <Form.Row label="Phone:" error={errors?.contact_phone?.message}>
              <Form.Input
                type="text"
                id="phone"
                {...register('contact_phone', {
                  required: 'This field is required.',
                })}
              />
            </Form.Row>
          </Form.Rows>
        </Form.ModalMain>
        <Form.ModalFooter>
          <Button
            variation="neutral"
            type="button"
            onClick={() => onCloseModal?.()}>
            Cancel
          </Button>
          <Button variation="primary" disabled={isProcessing}>
            {isUpdateSession ? (
              <>
                <SaveIcon size="16" />
                Save changes
              </>
            ) : (
              <>
                <PlusCircleIcon size="16" />
                Create contact
              </>
            )}
          </Button>
        </Form.ModalFooter>
      </Form>
    </Form.ModalWrapper>
  );
}

export default ContactForm;
