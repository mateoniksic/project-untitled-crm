import { styled, css } from 'styled-components';
import { UploadCloudIcon } from 'lucide-react';

const StyledFormRow = styled.div`
  position: relative;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: var(--text-hc-danger);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
`;

const labelType = {
  file: css`
    align-items: center;
    background-color: var(--component-normal-neutral);
    border-radius: 0.6rem;
    border: 1px solid var(--border-interactive);
    display: flex;
    flex-flow: row nowrap;
    gap: 1.6rem;
    justify-content: start;
    align-items: start;
    padding: 2rem;
    height: 8.5rem;

    &:hover {
      cursor: pointer;
      background-color: var(--component-normal-hover);
      border: 1px solid var(--border-interactive-focus);
    }
  `,
};

const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 0.4rem;

  ${(props) => props.$type && labelType[props.$type]}
`;

function FormRow({ label, type, error, children }) {
  return (
    <StyledFormRow>
      {label && (
        <Label htmlFor={children.props.id} $type={type}>
          {type === 'file' && <UploadCloudIcon />}
          {label}
        </Label>
      )}
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledFormRow>
  );
}

export default FormRow;
