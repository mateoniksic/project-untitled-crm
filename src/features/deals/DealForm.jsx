import { styled } from 'styled-components';
import { CircleDollarSignIcon, SaveIcon, PlusCircleIcon } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { useDealStatuses } from './useDealStatuses';
import { usePipelineStages } from './usePipelineStages';
import { useContacts } from '../contacts/useContacts';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import { useUser } from '../auth/useUser';
import { useCreateDeal } from './useCreateDeal';
import { useEffect, useMemo } from 'react';
import Spinner from '../../ui/Spinner';
import { useUpdateDeal } from './useUpdateDeal';

const ModalFormWrapper = styled.div`
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  max-width: 48rem;
  min-width: max-content;
  width: 100%;
`;

const ModalFormHeader = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  border-top-left-radius: var(--border-radius-sm);
  border-top-right-radius: var(--border-radius-sm);
  display: flex;
  flex-flow: row nowrap;
  gap: 0.8rem;
  justify-content: start;
  padding: 1.6rem 2.4rem;
`;

const ModalFormMain = styled.div`
  padding: 1.6rem 2.4rem;
`;

const ModalFormFooter = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  border-bottom-left-radius: var(--border-radius-sm);
  border-bottom-right-radius: var(--border-radius-sm);
  border-top: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  gap: 1.6rem;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
`;

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
        contact_id: contactOptions?.find(
          (contact) => contact.value === editValues.contact_id,
        ),
      }
    : {};

  const {
    control,
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
    isLoading: isSubmitting,
  } = useForm({
    values: defaultValues,
  });

  const { createDeal, isCreatingDeal } = useCreateDeal();
  const { updateDeal, isUpdatingDeal } = useUpdateDeal();

  function onSubmit(data) {
    console.log(data);
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

  if (isLoading)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  return (
    <ModalFormWrapper>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <ModalFormHeader>
          <CircleDollarSignIcon size="24" />
          New deal
        </ModalFormHeader>
        <ModalFormMain>
          <Form.Rows>
            <Form.Row label="Deal title" error={errors?.deal_title?.message}>
              <Form.Input
                type="text"
                id="deal-title"
                disabled={isSubmitting}
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
                disabled={isSubmitting}
                {...register('deal_description', {
                  required: 'This field is required.',
                })}
              />
            </Form.Row>
            <Form.Row label="Deal value" error={errors?.deal_value?.message}>
              <Form.Input
                type="number"
                id="deal-value"
                disabled={isSubmitting}
                {...register('deal_value', {
                  required: 'This field is required.',
                  validate: (value) =>
                    getValues().deal_value >= 0 ||
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    placeholder="Select pipeline stage"
                  />
                )}
              />
            </Form.Row>
          </Form.Rows>
        </ModalFormMain>
        <ModalFormFooter>
          <Button
            variation="neutral"
            type="button"
            onClick={() => onCloseModal?.()}>
            Cancel
          </Button>
          <Button variation="primary" disabled={''}>
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
        </ModalFormFooter>
      </form>
    </ModalFormWrapper>
  );
}

export default DealForm;
