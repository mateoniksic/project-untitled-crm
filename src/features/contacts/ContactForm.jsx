import { useForm } from 'react-hook-form';
import { PlusCircleIcon, Save, SaveIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import { FileInput } from '../../ui/FileInput';

import { createOrEditContact } from '../../services/apiContacts';

function ContactForm({ contactToEdit = {} }) {
  const { contact_id: editId, ...editValues } = contactToEdit;
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createContact } = useMutation({
    mutationFn: createOrEditContact,
    onSuccess: () => {
      toast.success('New contact created successfully.');
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      reset();
    },
    onError: (err) => toast.error(err),
  });

  const { isLoading: isEditing, mutate: editContact } = useMutation({
    mutationFn: ({ contact, id }) => createOrEditContact(contact, id),
    onSuccess: () => {
      toast.success('Contact updated successfully.');
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      reset();
    },
    onError: (err) => toast.error(err),
  });

  function onSubmit(data) {
    const avatar = data.contact_avatar
      ? typeof data.contact_avatar === 'string'
        ? data.contact_avatar
        : data.contact_avatar[0]
      : null;

    if (isEditSession) {
      editContact({
        contact: {
          ...data,
          contact_avatar: avatar,
          contact_created_by: 2,
          workspace_id: 1,
        },
        id: editId,
      });
    } else {
      createContact({
        ...data,
        contact_avatar: avatar,
        contact_created_by: 2,
        workspace_id: 1,
      });
    }
  }

  function onError(errors) {
    console.log(errors);
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

      <Button $variation="primary" disabled={isCreating}>
        {isEditSession ? (
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
