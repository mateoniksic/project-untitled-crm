import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { PlusCircleIcon, SaveIcon, User2Icon } from 'lucide-react';

import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import { FormInputFile } from '../../ui/FormInputFile';
import { FormInput } from '../../ui/FormInput';
import Text from '../../ui/Text';

import { useCreateContact } from './useCreateContact';
import { useUpdateContact } from './useUpdateContact';

import Form from '../../ui/Form';
import { useUser } from '../auth/useUser';
import { useUserProfile } from '../settings/user-profile/useUserProfile';
import Spinner from '../../ui/Spinner';

const StyledContactForm = styled.form`
  align-items: stretch;
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  max-width: 62rem;
  min-width: max-content;
  overflow: hidden;
  width: 100%;
`;

const FormHeader = styled.div`
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  padding: 3.2rem;
`;

const FormMain = styled.div`
  align-items: start;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.6rem;
  justify-content: start;
  padding: 3.2rem;
`;

const FormFooter = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  border-top: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  gap: 1.6rem;
  justify-content: space-between;
  padding: 2rem 3.2rem;
`;

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
          <FormRow
            label="Click to upload avatar."
            type="file"
            error={errors?.contact_avatar?.message}>
            <FormInputFile
              accept=".jpg, .jpeg, .png"
              id="avatar"
              {...register('contact_avatar')}
            />
          </FormRow>
          <FormRow
            label="First name:"
            error={errors?.contact_first_name?.message}>
            <FormInput
              type="text"
              id="fname"
              {...register('contact_first_name', {
                required: 'This field is required.',
              })}
            />
          </FormRow>
          <FormRow
            label="Last name:"
            error={errors?.contact_last_name?.message}>
            <FormInput
              type="text"
              id="lname"
              {...register('contact_last_name', {
                required: 'This field is required.',
              })}
            />
          </FormRow>
          <FormRow label="Email:" error={errors?.contact_email?.message}>
            <FormInput
              type="text"
              id="email"
              {...register('contact_email', {
                required: 'This field is required.',
              })}
            />
          </FormRow>
          <FormRow label="Phone:" error={errors?.contact_phone?.message}>
            <FormInput
              type="text"
              id="phone"
              {...register('contact_phone', {
                required: 'This field is required.',
              })}
            />
          </FormRow>
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
