import { styled } from 'styled-components';
import { Trash2Icon } from 'lucide-react';

import Button from './Button';
import Text from '../common/Text';

const StyledConfirmDelete = styled.div`
  align-items: stretch;
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  max-width: 40rem;
  min-width: min-content;
  overflow: hidden;
  width: 100%;
`;

const ConfirmDeleteHeader = styled.div`
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  padding: 2rem 2.4rem;
`;

const ConfirmDeleteMain = styled.div`
  align-items: start;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.6rem;
  justify-content: start;
  padding: 2rem 2.4rem;
`;

const ConfirmDeleteFooter = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  border-top: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  gap: 1.6rem;
  justify-content: space-between;
  padding: 2rem 2.4rem;
`;

function ConfirmDelete({ id, resourceName, disabled, onDelete, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <ConfirmDeleteHeader>
        <Text size="subtle-semibold">Delete {resourceName}?</Text>
      </ConfirmDeleteHeader>
      <ConfirmDeleteMain>
        <Text size="subtle-medium">
          Are you sure you want to delete {resourceName} permanently? This
          action cannot be undone.
        </Text>
      </ConfirmDeleteMain>
      <ConfirmDeleteFooter>
        <Button
          variation="neutral"
          type="button"
          onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button
          variation="danger"
          disabled={disabled}
          onClick={() => onDelete(id)}>
          <Trash2Icon size="16" />
          Confirm delete
        </Button>
      </ConfirmDeleteFooter>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
