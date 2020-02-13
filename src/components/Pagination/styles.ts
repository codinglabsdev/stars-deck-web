import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 570px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #000;
  font-family: Montserrat, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;

  margin-top: 40px;
  user-select: none;
`;

interface ButtonProps {
  round?: boolean;
  direction?: string;
}

export const Button = styled.button.attrs({ type: "button" })<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #000;
  font-family: Montserrat, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  transition: all 0.5s ease;
  svg {
    transition: all 0.75s ease-in-out;
  }

  &:hover {
    svg {
      transform: ${props =>
        props.direction ? `translateX(${props.direction}` : "(0)"});
    }
  }

  ${props =>
    props.round &&
    css`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      &:hover {
        background: #c2c2c2;
      }
    `}
`;
