import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
    8%, 41% {
        transform: translateX(-7px);
    }
    25%, 58% {
        transform: translateX(7px);
    }
    75% {
        transform: translateX(-4px);
    }
    92% {
        transform: translateX(4px);
    }
    0%, 100% {
        transform: translateX(0);
    }
`;

interface ContainerProps {
  half?: boolean;
  select?: boolean;
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: ${props => (!props.select ? '10px 25px;' : '0')};
  border: ${props => (!props.select ? '1px solid #000' : 'none')};
  border-radius: 5px;
  font-size: 0.8rem;
  color: #000;
  position: relative;
  max-width: ${props => (props.half ? '275px' : '570px')};
  margin: 10px 0;
  width: 100%;

  ${props =>
    props.error &&
    css`
      border-color: red;
      animation: ${shake} 0.4s linear;
      span {
        color: red;
      }
    `}

  span {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    background: #fff;
    transition: all 0.25s ease-in-out;
    padding: 0 5px;
    transform-origin: center left;

    &.active {
      top: 0;
      transform: translate(-10px, -50%) scale(0.95);
    }
  }

  input {
    width: 100%;
    font-size: 0.85rem;

    &::placeholder {
      opacity: 0;
      transition: all 0.25s ease-in-out;
    }

    &:focus {
      &::placeholder {
        opacity: 1;
      }
      & + span {
        top: 0;
        transform: translate(-10px, -50%) scale(0.95);
      }
    }
  }
`;

interface ErrorMessageProps {
  half?: boolean;
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  color: red;
  font-size: 0.75rem;
  text-align: left;
  width: 100%;
  min-height: 26px;
  left: 15px;
  top: -6px;
  position: relative;
  max-width: ${props => (props.half ? '275px' : '570px')};
`;
