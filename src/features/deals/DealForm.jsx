import { styled } from 'styled-components';
import { CircleDollarSignIcon, SaveIcon, PlusCircleIcon } from 'lucide-react';
import Form from '../../ui/Form';
import Button from '../../ui/Button';

const ModalFormWrapper = styled.div`
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  max-width: 48rem;
  min-width: max-content;
  overflow: hidden;
  width: 100%;
`;

const ModalFormHeader = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
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
  border-top: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  gap: 1.6rem;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
`;

function DealForm({ dealToEdit, onCloseModal }) {
  const isUpdateSession = false;

  return (
    <ModalFormWrapper>
      <form>
        <ModalFormHeader>
          <CircleDollarSignIcon size="24" />
          New deal
        </ModalFormHeader>
        <ModalFormMain>
          <Form.Rows>
            <Form.Row label="Deal title">
              <Form.Input type="text" id="deal-title"></Form.Input>
            </Form.Row>
            <Form.Row label="Deal description">
              <Form.TextArea type="textarea" id="deal-description" />
            </Form.Row>
          </Form.Rows>
          <Form.Row label="Deal value">
            <Form.Input type="number" min="0" id="deal-value"></Form.Input>
          </Form.Row>
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
