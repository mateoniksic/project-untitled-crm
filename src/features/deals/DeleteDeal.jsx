import { Trash2Icon } from 'lucide-react';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import ConfirmDelete from '../../ui/ConfirmDelete';

function DeleteDeal({
  id,
  resourceName,
  disabled,
  onDelete,
  redirect,
  children,
}) {
  return (
    <Modal>
      <Modal.Open windowName="delete-deal-form">
        <Button variation="danger">
          <Trash2Icon size="16" />
          {children}
        </Button>
      </Modal.Open>
      <Modal.Window name="delete-deal-form">
        <ConfirmDelete
          id={id}
          resourceName={resourceName}
          disabled={disabled}
          onDelete={onDelete}
          redirect={redirect}
        />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteDeal;
