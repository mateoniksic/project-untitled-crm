import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { PlusCircleIcon, Save, SaveIcon } from 'lucide-react';

import Button from '../../components/common/Button';
import FormRow from '../../components/common/FormRow';
import { FileInput } from '../../components/common/FileInput';
import { Input } from '../../components/common/Input';

import { useCreateContact } from './hooks/useCreateContact';
import { useUpdateContact } from './hooks/useUpdateContact';

const StyledContactForm = styled.form`
  align-items: start;
  display: flex;
  flex-flow: column nowrap;
  gap: 2.4rem;
  justify-content: center;
  max-width: 62rem;
  min-width: max-content;
  padding: 2.4rem;
  width: 100%;
`;

const FormActions = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 1.6rem;
  width: 100%;
`;

function ContactForm({ contactToEdit = {} }) {
  const { contact_id: updateId, ...editValues } = contactToEdit;
  const isUpdateSession = Boolean(updateId);

  const { isCreating, createContact } = useCreateContact();
  const { isUpdating, updateContact } = useUpdateContact();
  const isProcessing = isCreating || isUpdating;

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
      updateContact({
        contact: {
          ...data,
          contact_avatar: avatar,
          contact_created_by: 2,
          workspace_id: 1,
        },
        id: updateId,
      });
    } else {
      createContact(
        {
          ...data,
          contact_avatar: avatar,
          contact_created_by: 2,
          workspace_id: 1,
        },
        { onSuccess: () => reset() },
      );
    }
  }

  function onError(errors) {
    console.log('ContactForm errors: ', errors);
  }

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow
        label="Click to upload avatar."
        type="file"
        error={errors?.contact_avatar?.message}>
        <FileInput
          accept=".jpg, .jpeg, .png"
          id="avatar"
          {...register('contact_avatar')}
        />
      </FormRow>

      <FormRow label="First name:" error={errors?.contact_first_name?.message}>
        <Input
          type="text"
          id="fname"
          {...register('contact_first_name', {
            required: 'This field is required.',
          })}
        />
      </FormRow>

      <FormRow label="Last name:" error={errors?.contact_last_name?.message}>
        <Input
          type="text"
          id="lname"
          {...register('contact_last_name', {
            required: 'This field is required.',
          })}
        />
      </FormRow>

      <FormRow label="Email:" error={errors?.contact_email?.message}>
        <Input
          type="text"
          id="email"
          {...register('contact_email', {
            required: 'This field is required.',
          })}
        />
      </FormRow>

      <FormRow label="Phone:" error={errors?.contact_phone?.message}>
        <Input
          type="text"
          id="phone"
          {...register('contact_phone', {
            required: 'This field is required.',
          })}
        />
      </FormRow>

      <FormActions>
        <Button variation="neutral" onClick={(e) => e.preventDefault()}>
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
      </FormActions>
    </StyledContactForm>
  );
}

export default ContactForm;
