import { styled } from 'styled-components';
import { FormInput } from './FormInput';
import { FormInputFile } from './FormInputFile';
import FormRow from './FormRow';
import Button from './Button';
import FormSelect from './FormSelect';

const FormTextArea = styled.textarea`
  background-color: var(--component-interactive);
  border-radius: 0.6rem;
  border: 1px solid var(--border-interactive);
  font-size: 1.4rem;
  font-weight: 400;
  height: 100%;
  line-height: 2rem;
  max-height: 16rem;
  min-height: 4rem;
  overflow: auto;
  padding: 0.8rem;
  resize: vertical;
  width: 100%;
`;

const Form = styled.form`
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  gap: 2.4rem;
  justify-content: start;
  width: 100%;
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

Form.Header = FormHeader;
Form.Rows = FormRows;
Form.Row = FormRow;
Form.Input = FormInput;
Form.TextArea = FormTextArea;
Form.InputFile = FormInputFile;
Form.Select = FormSelect;
Form.Footer = FormFooter;
Form.Button = Button;

export default Form;
