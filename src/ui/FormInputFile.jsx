import { styled } from 'styled-components';

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

export { FormInputFile };
