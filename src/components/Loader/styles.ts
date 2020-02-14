import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    animation: ${pulsate} 1.5s ease-in-out infinite both;
  }
`;
