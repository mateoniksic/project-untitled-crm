import { Trash2Icon } from 'lucide-react';

import Modal from '../../components/layout/Modal';
import Button from '../../components/common/Button';

import ConfirmDelete from '../../components/common/ConfirmDelete';

function DeleteContact({ id, resourceName, disabled, onDelete }) {
  return (
    <Modal>
      <Modal.Open windowName="delete-contact-form">
        <Button variation="danger">
          <Trash2Icon size="16" />
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
