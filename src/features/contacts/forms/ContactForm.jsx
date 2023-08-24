import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { PlusCircleIcon, SaveIcon } from 'lucide-react';

import Button from '../../../components/Button';
import FormRow from '../../../components/FormRow';
import { FormInputFile } from '../../../components/FormInputFile';
import { FormInput } from '../../../components/FormInput';
import Text from '../../../components/Text';

import { useCreateContact } from '../hooks/useCreateContact';
import { useUpdateContact } from '../hooks/useUpdateContact';

import Form from '../../../components/Form';

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

  const { createContact, isCreatingContact } = useCreateContact();
  const { updateContact, isUpdatingContact } = useUpdateContact();
  const isProcessing = isCreatingContact || isUpdatingContact;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isUpdateSession ? editValues : {},
  });

  function onSubmit(data) {
    const avatar = data.contact_avatar
      ? typeof data.contact_avatar === 'string'
        ? data.contact_avatar
        : data.contact_avatar[0]
      : null;

    if (isUpdateSession) {
      updateContact(
        {
          contact: {
            ...data,
            contact_avatar: avatar,
            contact_created_by: 2,
            workspace_id: 1,
          },
          id: updateId,
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
          ...data,
          contact_avatar: avatar,
          contact_created_by: 2,
          workspace_id: 1,
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

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit, onError)}>
      <FormHeader>
        <Text size="large" as="h1">
          New contact
        </Text>
      </FormHeader>
      <FormMain>
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

        <FormRow label="Last name:" error={errors?.contact_last_name?.message}>
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
      </FormMain>

      <FormFooter>
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
      </FormFooter>
    </StyledContactForm>
  );
}

export default ContactForm;
