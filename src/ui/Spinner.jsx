import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 60px;
  height: 60px;

  & .path {
    stroke: var(--bg-solid-normal);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

function Spinner() {
  return (
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  );
}

const StyledSpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SpinnerWrapper({ children }) {
  return <StyledSpinnerWrapper>{children}</StyledSpinnerWrapper>;
}

const StyledSpinnerFullPage = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100dvw;
`;

function SpinnerFullPage({ children }) {
  return <StyledSpinnerFullPage>{children}</StyledSpinnerFullPage>;
}

Spinner.FullPage = SpinnerFullPage;
Spinner.Wrapper = SpinnerWrapper;

export default Spinner;
