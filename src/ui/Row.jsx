import { css, styled } from 'styled-components';

const backgroundColorStyles = {
  normal: css`
    background-color: var(--bg-normal);
  `,
};

const borderStyles = {
  1: css`
    border: 0.1rem solid var(--border-non-interactive);
  `,
};

const borderRadiusStyles = {
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

  ${(props) =>
    backgroundColorStyles[props.$backgroundColor] &&
    backgroundColorStyles[props.$backgroundColor]};

  ${(props) => borderStyles[props.$border] && borderStyles[props.$border]};
  ${(props) =>
    borderRadiusStyles[props.$borderRadius] &&
    borderRadiusStyles[props.$borderRadius]};
`;

function Row({ children, ...restProps }) {
  return <StyledRow {...restProps}>{children}</StyledRow>;
}

export default Row;
