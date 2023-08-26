import { styled } from 'styled-components';
import { FormInput } from './FormInput';
import { FormInputFile } from './FormInputFile';
import FormRow from './FormRow';
import Button from './Button';

const FormSelect = styled.select`
  background-color: var(--component-interactive);
  border-radius: 0.6rem;
  border: 1px solid var(--border-interactive);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  padding: 0.8rem;
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

const FormMain = styled.div`
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
Form.Main = FormMain;
Form.Row = FormRow;
Form.Input = FormInput;
Form.InputFile = FormInputFile;
Form.Select = FormSelect;
Form.Footer = FormFooter;
Form.Button = Button;

export default Form;
