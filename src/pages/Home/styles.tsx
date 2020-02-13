import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  div {
    max-width: 800px;
    width: 100%;
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: #ff79c6;
      padding: 10px 0;
    }

    h2 {
      padding: 10px 0;
    }

    p {
      line-height: 1.5rem;
      padding: 5px 0;
      text-align: center;
    }

    button {
      margin: 20px 0;
      height: 44px;
      padding: 0 25px;
      color: #fff;
      background: #3b9eff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  justify-self: flex-end;

  a {
    color: #fff;
    transition: opacity 0.2s;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
