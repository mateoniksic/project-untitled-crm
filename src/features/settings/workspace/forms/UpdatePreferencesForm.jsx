import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form';

function UpdatePreferencesForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit() {}

  function onError(error) {
    console.log(error);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Main>
        <Form.Row
          label="Workspace currency"
          error={errors?.workspace_currency?.message}>
          <select
            name="workspace_currency"
            id="workspace_currency"
            {...register('workspace_currency')}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </Form.Row>
      </Form.Main>
      <Form.Footer>
        <Form.Button variation="primary" disabled={''}>
          Save changes
        </Form.Button>
      </Form.Footer>
    </Form>
  );
}

export default UpdatePreferencesForm;
