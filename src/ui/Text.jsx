import { styled, css } from 'styled-components';

const Heading = styled.span`
  ${(props) =>
    props.size === '2xlarge' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      line-height: 3.6rem;
      letter-spacing: -0.75%;
    `}

  ${(props) =>
    props.size === 'xlarge' &&
    css`
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 3.2rem;
      letter-spacing: -0.6%;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 100%;
    `}

  ${(props) =>
    props.size === 'normal' &&
    css`
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.8rem;
    `}

  ${(props) =>
    props.size === 'subtle' &&
    css`
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2rem;
    `}

      ${(props) =>
    props.size === 'subtle-medium' &&
    css`
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
    `}

      ${(props) =>
    props.size === 'subtle-semibold' &&
    css`
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2rem;
    `}
`;

export default Heading;
