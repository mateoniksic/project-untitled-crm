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
  align-items: center;
  border-radius: 0.6rem;
  border: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.4rem;
  font-weight: 600;
  gap: 0.8rem;
  justify-content: center;
  line-height: 2rem;
  padding: ${(props) =>
    props.$iconOnly === true ? '0.8rem' : '0.8rem 1.6rem'};

  ${(props) => (props.$variation ? variations[props.$variation] : 'primary')};
`;

const StyledLink = styled(Link)`
  align-items: center;
  border-radius: 0.6rem;
  border: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.4rem;
  font-weight: 600;
  gap: 0.8rem;
  justify-content: center;
  line-height: 2rem;
  padding: ${(props) =>
    props.$iconOnly === true ? '0.8rem' : '0.8rem 1.6rem'};

  ${(props) => (props.$variation ? variations[props.$variation] : 'primary')}
`;

function Button({
  to,
  type,
  variation,
  iconOnly,
  onClick,
  disabled,
  children,
}) {
  if (to)
    return (
      <StyledLink $variation={variation} $iconOnly={iconOnly} to={to}>
        {children}
      </StyledLink>
    );

  return (
    <StyledButton
      $variation={variation}
      $iconOnly={iconOnly}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default Button;
