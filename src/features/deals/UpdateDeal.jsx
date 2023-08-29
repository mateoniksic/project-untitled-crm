import { PenBoxIcon } from 'lucide-react';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import DealForm from './DealForm';

function UpdateDeal({ dealToUpdate, children }) {
  return (
    <Modal>
      <Modal.Open windowName="update-deal-form">
        <Button variation="neutral" iconOnly={true}>
          <PenBoxIcon size="16" />
          {children}
        </Button>
      </Modal.Open>
      <Modal.Window name="update-deal-form">
        <DealForm dealToUpdate={dealToUpdate} />
      </Modal.Window>
    </Modal>
  );
}

export default UpdateDeal;
