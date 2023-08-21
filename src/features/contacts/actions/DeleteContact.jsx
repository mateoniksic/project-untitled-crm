import { Trash2Icon } from 'lucide-react';

import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import ConfirmDelete from '../../../components/ConfirmDelete';

function DeleteContact({ id, resourceName, disabled, onDelete }) {
  return (
    <Modal>
      <Modal.Open windowName="delete-contact-form">
        <Button variation="danger">
          <Trash2Icon size="16" />
          Delete
        </Button>
      </Modal.Open>
      <Modal.Window name="delete-contact-form">
        <ConfirmDelete
          id={id}
          resourceName={resourceName}
          disabled={disabled}
          onDelete={onDelete}
        />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteContact;
