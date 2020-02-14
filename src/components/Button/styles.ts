import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface Props {
  variant?: 'text' | 'outlined';
  type?: 'button' | 'submit' | null;
}

export const Container = styled.button.attrs<Props>(props => ({
  type: props.type || 'text',
}))<Props>`
  padding: 10px 25px;
  color: #fff;
  border-radius: 5px;
  font-family: Montserrat, 'sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: #74b9ff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.75s ease;
  &:hover {
    background: ${darken(0.05, '#74b9ff')};
  }

  ${props =>
    props?.variant === 'outlined' &&
    css`
      background: #fff;
      border: 1px solid #74b9ff;
      color: #74b9ff;
      &:hover {
        border-color: ${darken(0.05, '#74b9ff')};
      }
    `}

  ${props =>
    props?.variant === 'text' &&
    css`
      background: none;
      border: none;
      box-shadow: none;
      color: #74b9ff;
      &:hover {
        background: none;
        color: ${darken(0.3, '#74b9ff')};
      }
    `}
`;
