import { styled, css } from 'styled-components';
import { Link } from 'react-router-dom';

const variations = {
  primary: css`
    background-color: var(--component-normal);

    &:hover {
      background-color: var(--component-hovered);
    }
  `,
  neutral: css`
    background-color: var(--component-normal-neutral);

    &:hover {
      background-color: var(--component-hovered-neutral);
    }
  `,
  danger: css`
    color: var(--text-hc-danger);
    background-color: var(--component-normal-danger);

    &:hover {
      background-color: var(--component-hovered-danger);
    }
  `,
};

const StyledButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.6rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  padding: 0.8rem 1.6rem;

  ${(props) => (props.$variation ? variations[props.$variation] : 'primary')}
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.6rem;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  padding: 0.8rem 1.6rem;

  ${(props) => (props.$variation ? variations[props.$variation] : 'primary')}
`;

function Button({ to, type, variation, onClick, disabled, children }) {
  if (to)
    return (
      <StyledLink $variation={variation} to={to}>
        {children}
      </StyledLink>
    );

  return (
    <StyledButton
      $variation={variation}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default Button;
