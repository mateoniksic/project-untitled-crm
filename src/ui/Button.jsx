import { styled, css } from 'styled-components';

const variations = {
  primary: css`
    background-color: var(--component-normal);

    &:hover {
      background-color: var(--component-hovered);
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

const Button = styled.button`
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

export default Button;
