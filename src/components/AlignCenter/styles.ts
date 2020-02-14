import styled, { css } from 'styled-components';

interface Props {
  fullWidth?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
