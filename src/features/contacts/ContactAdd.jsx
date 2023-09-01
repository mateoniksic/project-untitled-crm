import { PlusCircleIcon } from 'lucide-react';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import ContactForm from './ContactForm';

function ContactAdd() {
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

export default ContactAdd;
