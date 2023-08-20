import { styled } from 'styled-components';

const FileInput = styled.input.attrs({ type: 'file' })`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  outline: transparent;
  position: absolute;
  right: 2.9rem;
  top: 6.4rem;
  width: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

export { FileInput };
