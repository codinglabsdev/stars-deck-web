import styled from 'styled-components';

export const Container = styled.button.attrs({ type: 'button' })`
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
      transform: translateX(-50%);
    }
  }
`;
