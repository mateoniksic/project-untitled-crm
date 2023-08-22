import { Trash2Icon } from 'lucide-react';

import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import ConfirmDelete from '../../../components/ConfirmDelete';

function DeleteContact({
  id,
  resourceName,
  disabled,
  onDelete,
  redirect,
  children,
}) {
  return (
    <Modal>
      <Modal.Open windowName="delete-contact-form">
        <Button variation="danger">
          <Trash2Icon size="16" />
          {children}
        </Button>
      </Modal.Open>
      <Modal.Window name="delete-contact-form">
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

export default DeleteContact;
