import { PlusCircleIcon } from 'lucide-react';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';

function AddDeal() {
  return (
    <Modal>
      <Modal.Open windowName="add-deal-form">
        <Button variation="primary">
          <PlusCircleIcon size="16" />
          New deal
        </Button>
      </Modal.Open>
      <Modal.Window name="add-deal-form">Deal Form</Modal.Window>
    </Modal>
  );
}

export default AddDeal;
