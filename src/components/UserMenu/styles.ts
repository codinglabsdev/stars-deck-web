import styled, { css } from 'styled-components';

interface Props {
  open: boolean;
}

export const Container = styled.div<Props>`
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  height: 0;
  transition: all 0.25s ease-in-out;
  background: #fff;
  color: #000;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media screen and (max-width: 992px) {
    width: 100%;
    transform: translateX(100%);
    top: 0;
    left: 0;
    height: 100%;
  }

  ${props =>
    props.open &&
    css`
      height: 100px;
      @media screen and (max-width: 992px) {
        transform: translateX(0);
      }
    `}

  ul.menu {
    padding: 10px;
    li {
      display: contents;
    }
    @media screen and (max-width: 992px) {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      button {
        display: inline-block;
        border-right: 1px solid #dfdfdf;
        padding: 0;
        &:last-of-type {
          border: none;
        }
      }
    }
    button {
      user-select: none;
      display: block;
      width: 100%;
      text-align: left;
      cursor: pointer;
      padding: 10px;
      font-size: 0.9rem;
      letter-spacing: normal;
      transition: all 0.15s ease-in-out;
      &:hover {
        color: #74b9ff;
      }
    }
  }
`;
