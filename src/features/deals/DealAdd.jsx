import { PlusCircleIcon } from 'lucide-react';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import DealForm from './DealForm';

function DealAdd() {
  return (
    <Modal>
      <Modal.Open windowName="add-deal-form">
        <Button variation="primary">
          <PlusCircleIcon size="16" />
          New deal
        </Button>
      </Modal.Open>
      <Modal.Window name="add-deal-form">
        <DealForm />
      </Modal.Window>
    </Modal>
  );
}

export default DealAdd;
