import { css, styled } from 'styled-components';

const border = {
  1: css`
    border: 0.1rem solid var(--border-non-interactive);
  `,
};

const borderRadius = {
  sm: css`
    border-radius: var(--border-radius-sm);
  `,
};

const StyledRow = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || 'row'};
  flex-wrap: ${(props) => props.$wrap || 'wrap'};
  justify-content: ${(props) => props.$justifyContent || 'start'};
  align-items: ${(props) => props.$alignItems || 'center'};
  gap: ${(props) => props.$gap || '0'};
  ${(props) => props.$padding && `padding: ${props.$padding}`};
  ${(props) => props.$margin && `margin: ${props.$margin}`};
  ${(props) => border[props.$border] && border[props.$border]};
  ${(props) =>
    borderRadius[props.$borderRadius] && borderRadius[props.$borderRadius]};
`;

function Row({ children, ...restProps }) {
  return <StyledRow {...restProps}>{children}</StyledRow>;
}

export default Row;
