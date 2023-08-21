import { PlusCircleIcon } from 'lucide-react';

import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import ContactForm from '../forms/ContactForm';

function AddContact() {
  return (
    <Modal>
      <Modal.Open windowName="add-contact-form">
        <Button variation="primary">
          <PlusCircleIcon size="16" />
          New contact
        </Button>
      </Modal.Open>
      <Modal.Window name="add-contact-form">
        <ContactForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddContact;
