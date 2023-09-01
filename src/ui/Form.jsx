import { styled } from 'styled-components';
import FormRow from './FormRow';
import Button from './Button';
import FormSelect from './FormSelect';

const FormInput = styled.input`
  background-color: var(--component-interactive);
  border-radius: 0.6rem;
  border: 1px solid var(--border-interactive);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  padding: 0.8rem;
  min-width: max-content;
  width: 100%;
`;

const FormInputFile = styled.input.attrs({ type: 'file' })`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  outline: transparent;
  position: absolute;
  right: 2.9rem;
  top: 6.4rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

const FormTextArea = styled.textarea`
  background-color: var(--component-interactive);
  border-radius: 0.6rem;
  border: 1px solid var(--border-interactive);
  font-size: 1.4rem;
  font-weight: 500;
  height: 100%;
  line-height: 2rem;
  max-height: 16rem;
  min-height: 10rem;
  overflow: auto;
  padding: 0.8rem;
  resize: vertical;
  width: 100%;
`;

const Form = styled.form`
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.6rem;
  justify-content: start;
`;

const FormHeader = styled.div`
  margin-top: 2.4rem;
`;

const FormRows = styled.div`
  align-items: start;
  display: flex;
  flex-flow: column nowrap;
  gap: 1.6rem;
  justify-content: start;
`;

const FormFooter = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: column;
  justify-content: start;
`;

const ModalFormWrapper = styled.div`
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  max-width: 48rem;
  min-width: max-content;
  width: 100%;
`;

const ModalFormHeader = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  border-top-left-radius: var(--border-radius-sm);
  border-top-right-radius: var(--border-radius-sm);
  display: flex;
  flex-flow: row nowrap;
  gap: 0.8rem;
  justify-content: start;
  padding: 1.6rem 2.4rem;
`;

const ModalFormMain = styled.div`
  padding: 1.6rem 2.4rem;
`;

const ModalFormFooter = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  border-bottom-left-radius: var(--border-radius-sm);
  border-bottom-right-radius: var(--border-radius-sm);
  border-top: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  gap: 1.6rem;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
`;

Form.Header = FormHeader;
Form.Rows = FormRows;
Form.Row = FormRow;
Form.Input = FormInput;
Form.TextArea = FormTextArea;
Form.InputFile = FormInputFile;
Form.Select = FormSelect;
Form.Footer = FormFooter;
Form.Button = Button;
Form.ModalWrapper = ModalFormWrapper;
Form.ModalHeader = ModalFormHeader;
Form.ModalMain = ModalFormMain;
Form.ModalFooter = ModalFormFooter;

export default Form;
