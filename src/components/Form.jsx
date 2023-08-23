import { styled } from 'styled-components';
import { Input } from './Input';
import FormRow from './FormRow';
import Button from './Button';
import { FileInput } from './InputFile';

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;
  width: 100%;
  gap: 2.4rem;
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
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: stretch;
`;

Form.Header = FormHeader;
Form.Main = FormMain;
Form.Footer = FormFooter;
Form.Input = Input;
Form.InputFile = FileInput;
Form.Row = FormRow;
Form.Button = Button;

export default Form;
