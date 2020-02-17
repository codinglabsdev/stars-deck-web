import styled, { css } from 'styled-components';

interface Props {
  open: boolean;
}

export const Container = styled.button.attrs({ type: 'button' })<Props>`
  /* background: red; */
  position: relative;
  height: 10px;
  width: 20px;
  z-index: 1;
  .bar {
    height: 2px;
    width: 20px;
    background: #000;
    position: absolute;
    display: block;
    transition: all 0.2s ease-in-out;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 50%;
    }
    &:nth-of-type(3) {
      top: 100%;
    }
    ${props =>
      props.open &&
      css`
        &:nth-of-type(1) {
          top: 50%;
          transform: rotate(-45deg);
        }
        &:nth-of-type(2) {
          transform: rotate(45deg);
        }
        &:nth-of-type(3) {
          top: 50%;
          transform: rotate(-45deg);
          opacity: 0;
        }
      `}
  }
`;
