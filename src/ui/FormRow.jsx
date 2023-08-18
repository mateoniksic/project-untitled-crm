import { styled } from 'styled-components';

const ErrorMessage = styled.div`
  color: var(--text-hc-danger);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
`;

function FormRow({ label, error, children }) {
  return (
    <div>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}

export default FormRow;
