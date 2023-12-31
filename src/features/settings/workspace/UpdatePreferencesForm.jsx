import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import { useUser } from '../../auth/useUser';
import { useWorkspace } from './useWorkspace';
import { useUpdateWorkspace } from './useUpdateWorkspace';
import Form from '../../../ui/Form';
import Spinner from '../../../ui/Spinner';

function UpdatePreferencesForm() {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();

  const { workspace, isLoadingWorkspace } = useWorkspace({ workspaceId });

  const currencyOptions = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' },
  ];

  const defaultValues = {
    ...workspace,
    workspace_currency: currencyOptions.find(
      (currency) => currency.value === workspace?.workspace_currency,
    ),
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    values: defaultValues,
  });

  const { updateWorkspace, isUpdatingWorkspace } = useUpdateWorkspace();

  function onSubmit(data) {
    updateWorkspace({
      workspace: {
        ...data,
        workspace_currency: data.workspace_currency.value,
      },
      workspaceId,
    });
  }

  function onError(error) {
    console.log(error);
  }

  if (isLoadingWorkspace)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Rows>
        <Form.Row
          label="Workspace currency"
          error={errors?.workspace_currency?.message}>
          <Controller
            name="workspace_currency"
            control={control}
            render={({ field }) => (
              <Form.Select
                field={field}
                options={currencyOptions}
                placeholder="Select currency"
                menuPortalTarget={document.body}
              />
            )}
          />
        </Form.Row>
      </Form.Rows>
      <Form.Footer>
        <Form.Button variation="primary" disabled={isUpdatingWorkspace}>
          Save changes
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default UpdatePreferencesForm;
