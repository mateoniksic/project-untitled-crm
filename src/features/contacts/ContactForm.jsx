import { useForm } from 'react-hook-form';
import { PlusCircleIcon, Save, SaveIcon } from 'lucide-react';

import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import { FileInput } from '../../ui/FileInput';

import { useCreateContact } from './hooks/useCreateContact';
import { useUpdateContact } from './hooks/useUpdateContact';

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
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="First name:" error={errors?.contact_first_name?.message}>
        <input
          type="text"
          id="fname"
          {...register('contact_first_name', {
            required: 'This field is required.',
          })}
        />
      </FormRow>

      <FormRow label="Last name:" error={errors?.contact_last_name?.message}>
        <input
          type="text"
          id="lname"
          {...register('contact_last_name', {
            required: 'This field is required.',
          })}
        />
      </FormRow>

      <FormRow label="Email:" error={errors?.contact_email?.message}>
        <input
          type="text"
          id="email"
          {...register('contact_email', {
            required: 'This field is required.',
          })}
        />
      </FormRow>

      <FormRow label="Phone:" error={errors?.contact_phone?.message}>
        <input
          type="text"
          id="phone"
          {...register('contact_phone', {
            required: 'This field is required.',
          })}
        />
      </FormRow>

      <FormRow label="Avatar:" error={errors?.contact_avatar?.message}>
        <FileInput
          accept=".jpg, .jpeg, .png"
          id="avatar"
          {...register('contact_avatar')}
        />
      </FormRow>

      <Button $variation="primary" disabled={isProcessing}>
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
    </form>
  );
}

export default ContactForm;
