import { PenBoxIcon } from 'lucide-react';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import ContactForm from './ContactForm';

function UpdateContact({ contactToUpdate }) {
  return (
    <Modal>
      <Modal.Open windowName="update-contact-form">
        <Button variation="neutral" iconOnly={true}>
          <PenBoxIcon size="16" />
        </Button>
      </Modal.Open>
      <Modal.Window name="update-contact-form">
        <ContactForm contactToUpdate={contactToUpdate} />
      </Modal.Window>
    </Modal>
  );
}

export default UpdateContact;
