import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface Props {
  open: boolean;
  focus: boolean;
}

export const Container = styled.div<Props>`
  flex: auto;
  padding-right: 70px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  padding: 0 20px;
  color: #bdc3c7;
  transition: all 0.5s ease;

  button {
    transition: all 0.5s ease;
  }

  input {
    flex: auto;
    color: ${darken(0.5, '#bdc3c7')};
    padding-left: 20px;
    transition: all 0.5s ease;

    &::placeholder {
      color: #bdc3c7;
    }
  }

  ${props =>
    !props.open &&
    css`
      flex: 0;
      padding-right: 0;
      input {
        width: 0;
        padding: 0;
      }
      .close {
        opacity: 0;
        transform: rotate(180deg) translateX(-100%);
        &:disabled {
          cursor: default;
        }
      }
    `}

  ${props =>
    props.focus &&
    props.open &&
    css`
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    `}

  @media screen and (max-width: 992px) {
    box-shadow: none;
    ${props =>
      props.open &&
      css`
        input {
          flex: unset;
          max-width: 100vw;
          width: calc(100vw - 88px);
        }
      `}
  }
`;
