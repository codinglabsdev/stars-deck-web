import styled from 'styled-components';

interface Props {
  half?: boolean;
  select?: boolean;
}

export const Container = styled.div<Props>`
  padding: ${props => (!props.select ? '10px 25px;' : '0')};
  border: ${props => (!props.select ? '1px solid #000' : 'none')};
  border-radius: 5px;
  font-size: 0.8rem;
  color: #000;
  position: relative;
  max-width: ${props => (props.half ? '275px' : '570px')};
  margin: 10px 0;
  width: 100%;

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

    &:focus {
      & + span {
        top: 0;
        transform: translate(-10px, -50%) scale(0.95);
      }
    }
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
  text-align: left;
  width: 100%;
  min-height: 26px;
  left: 15px;
  top: -6px;
  position: relative;
`;
