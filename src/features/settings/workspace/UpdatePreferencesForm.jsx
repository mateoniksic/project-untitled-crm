import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useUser } from '../../auth/useUser';
import { useWorkspace } from './useWorkspace';
import { useUpdateWorkspace } from './useUpdateWorkspace';
import Form from '../../../ui/Form';
import Spinner from '../../../ui/Spinner';

function UpdatePreferencesForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    user: { workspace_id: workspaceId },
  } = useUser();

  const { workspace, isLoadingWorkspace } = useWorkspace({ workspaceId });
  useEffect(() => reset(workspace), [reset, workspace]);

  const { updateWorkspace, isUpdatingWorkspace } = useUpdateWorkspace();

  function onSubmit(data) {
    updateWorkspace({ workspace: data, workspaceId });
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
          <Form.Select
            name="workspace_currency"
            id="workspace_currency"
            disabled={isUpdatingWorkspace}
            {...register('workspace_currency')}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Form.Select>
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
