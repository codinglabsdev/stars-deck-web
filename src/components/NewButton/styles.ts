import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface Props {
  background?: boolean;
}

export const Container = styled.button.attrs({ type: 'button' })<Props>`
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
    transition: all 0.25s ease-in-out;
  }

  &:hover {
    svg {
      transform: rotate(180deg);
    }
  }

  ${props =>
    props.background &&
    css`
      border-radius: 50%;
      background: #74b9ff;
      box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);
      svg {
        color: #fff;
      }

      &:hover {
        background: ${darken(0.05, '#74b9ff')};
      }
    `}
`;
