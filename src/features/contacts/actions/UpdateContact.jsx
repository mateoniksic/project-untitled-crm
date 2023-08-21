import { PenBoxIcon } from 'lucide-react';

import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import ContactForm from '../forms/ContactForm';

function UpdateContact({ contactToUpdate }) {
  return (
    <Modal>
      <Modal.Open windowName="update-contact-form">
        <Button variation="primary">
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
