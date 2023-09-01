import { CircleDollarSignIcon, SaveIcon, PlusCircleIcon } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { useUser } from '../auth/useUser';
import { useContacts } from '../contacts/useContacts';
import { useDealStatuses } from './useDealStatuses';
import { usePipelineStages } from './usePipelineStages';
import { useCreateDeal } from './useCreateDeal';
import { useUpdateDeal } from './useUpdateDeal';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';

function DealForm({ dealToUpdate = {}, onCloseModal }) {
  const { deal_id: dealId, ...editValues } = dealToUpdate;
  const isUpdateSession = Boolean(dealId);

  const {
    user: { workspace_id: workspaceId },
    isLoadingUser,
  } = useUser();

  const { dealStatuses, isLoadingDealStatuses } = useDealStatuses();
  const dealStatusOptions = dealStatuses?.map((status) => ({
    value: status.deal_status_id,
    label: status.deal_status_name,
  }));

  const { pipelineStages, isLoadingPipelineStages } = usePipelineStages();
  const pipelineStageOptions = pipelineStages?.map((stage) => ({
    value: stage.pipeline_stage_id,
    label: stage.pipeline_stage_name,
  }));

  const { contacts, isLoadingContacts } = useContacts({ workspaceId });
  console.log(contacts);
  const contactOptions = contacts?.map((contact) => ({
    value: contact.contact_id,
    label: [contact.contact_first_name, contact.contact_last_name].join(' '),
  }));

  const isLoading =
    isLoadingUser ||
    isLoadingDealStatuses ||
    isLoadingPipelineStages ||
    isLoadingContacts;

  const defaultValues = isUpdateSession
    ? {
        ...editValues,
        deal_status_id: dealStatusOptions?.find(
          (status) => status.value === editValues.deal_status_id,
        ),
        pipeline_stage_id: pipelineStageOptions?.find(
          (stage) => stage.value === editValues.pipeline_stage_id,
        ),
        contact_id: contactOptions?.find((contact) => {
          console.log(contact.value, editValues.contact_id);
          return contact.value === editValues.contact_id;
        }),
      }
    : {};

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: defaultValues,
  });

  const { createDeal, isCreatingDeal } = useCreateDeal();
  const { updateDeal, isUpdatingDeal } = useUpdateDeal();
  const isProcessing = isCreatingDeal || isUpdatingDeal;

  function onSubmit(data) {
    if (isUpdateSession) {
      updateDeal(
        {
          deal: {
            ...data,
            deal_status_id: data.deal_status_id.value,
            pipeline_stage_id: data.pipeline_stage_id.value,
            contact_id: data.contact_id.value,
            pipeline_id: 1,
            workspace_id: workspaceId,
            deal_id: dealId,
          },
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal();
          },
        },
      );
    } else {
      createDeal(
        {
          deal: {
            ...data,
            deal_status_id: data.deal_status_id.value,
            pipeline_stage_id: data.pipeline_stage_id.value,
            contact_id: data.contact_id.value,
            pipeline_id: 1,
            workspace_id: workspaceId,
          },
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal();
          },
        },
      );
    }
  }

  function onError(error) {
    console.log(error);
  }

  console.log(defaultValues, editValues);

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
          <CircleDollarSignIcon size="24" />
          Deal
        </Form.ModalHeader>
        <Form.ModalMain>
          <Form.Rows>
            <Form.Row label="Deal title" error={errors?.deal_title?.message}>
              <Form.Input
                type="text"
                id="deal-title"
                disabled={isProcessing}
                {...register('deal_title', {
                  required: 'This field is required.',
                })}
              />
            </Form.Row>
            <Form.Row
              label="Deal description"
              error={errors?.deal_description?.message}>
              <Form.TextArea
                type="textarea"
                id="deal-description"
                disabled={isProcessing}
                {...register('deal_description', {
                  required: 'This field is required.',
                })}
              />
            </Form.Row>
            <Form.Row label="Deal value" error={errors?.deal_value?.message}>
              <Form.Input
                type="number"
                id="deal-value"
                disabled={isProcessing}
                {...register('deal_value', {
                  required: 'This field is required.',
                  validate: (value) =>
                    value >= 0 ||
                    'Value must be greater than or equal to zero.',
                })}
              />
            </Form.Row>
            <Form.Row label="Contact" error={errors?.contact_id?.message}>
              <Controller
                name="contact_id"
                control={control}
                rules={{
                  required: 'This field is required.',
                }}
                render={({ field }) => (
                  <Form.Select
                    field={field}
                    options={contactOptions}
                    disabled={isProcessing}
                    placeholder="Select contact"
                  />
                )}
              />
            </Form.Row>
            <Form.Row
              label="Deal status"
              error={errors?.deal_status_id?.message}>
              <Controller
                name="deal_status_id"
                control={control}
                rules={{
                  required: 'This field is required.',
                }}
                render={({ field }) => (
                  <Form.Select
                    field={field}
                    options={dealStatusOptions}
                    disabled={isProcessing}
                    placeholder="Select deal status"
                  />
                )}
              />
            </Form.Row>
            <Form.Row
              label="Pipeline stage"
              error={errors?.pipeline_stage_id?.message}>
              <Controller
                name="pipeline_stage_id"
                control={control}
                rules={{
                  required: 'This field is required.',
                }}
                render={({ field }) => (
                  <Form.Select
                    field={field}
                    options={pipelineStageOptions}
                    disabled={isProcessing}
                    placeholder="Select pipeline stage"
                  />
                )}
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
                Create deal
              </>
            )}
          </Button>
        </Form.ModalFooter>
      </Form>
    </Form.ModalWrapper>
  );
}

export default DealForm;
