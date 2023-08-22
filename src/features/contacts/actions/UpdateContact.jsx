import { PenBoxIcon } from 'lucide-react';

import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import ContactForm from '../forms/ContactForm';

function UpdateContact({ contactToUpdate, children }) {
  return (
    <Modal>
      <Modal.Open windowName="update-contact-form">
        <Button variation="neutral">
          <PenBoxIcon size="16" />
          {children}
        </Button>
      </Modal.Open>
      <Modal.Window name="update-contact-form">
        <ContactForm contactToUpdate={contactToUpdate} />
      </Modal.Window>
    </Modal>
  );
}

export default UpdateContact;
