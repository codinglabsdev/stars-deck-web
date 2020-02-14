import styled, { keyframes, css } from 'styled-components';

interface Props {
  fullScreen?: boolean;
  background?: string;
}

const pulsate = keyframes`
  from {
            transform: scale(1);
            animation-timing-function: ease-out;
  }
  10% {
            transform: scale(0.91);
            animation-timing-function: ease-in;
  }
  17% {
            transform: scale(0.98);
            animation-timing-function: ease-out;
  }
  33% {
            transform: scale(0.87);
            animation-timing-function: ease-in;
  }
  45% {
            transform: scale(1);
            animation-timing-function: ease-out;
  }
}
`;

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background || 'none'};

  ${props =>
    props.fullScreen &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    `}

  img {
    animation: ${pulsate} 1.5s ease-in-out infinite both;
  }
`;
