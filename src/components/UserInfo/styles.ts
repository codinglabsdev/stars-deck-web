import styled, { css } from 'styled-components';

interface ContainerProps {
  position: number;
  podium?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 560px;
  padding: 0 25px 25px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props: ContainerProps) => (props.position === 1 ? '#fff' : '#000')};
  transition: all 1s ease;
  margin-top: -200px;
  z-index: 1;

  h2, img, span, a {
    z-index: 1;
  }

  span {
    padding: 0 25px 25px;
    font-size: 0.9rem;
    line-height: 1.25rem;
  }

  h2 {
    padding-top: 130px;
    &.points {
      font-size: 3.25rem;
      padding-top: 45px;
      padding-bottom: 50px;
    }
  }

  &:before {
    content: ${props => `"${props.position.toString()}"`};
    position: absolute;
    top: 50%;
    left: 25px;
    font-family: Fjalla One, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: ${props => (props.position === 1 ? '18.75rem' : '12.5rem')};
    text-transform: uppercase;
    color: ${props =>
      props.position === 1
        ? 'rgba(255, 255, 255, 0.25)'
        : 'rgba(0, 0, 0, 0.10)'};
    z-index: 1;
    transform: translateY(-50%);

    ${props =>
      props.position === 1 &&
      css`
        left: 50%;
        transform: translate(-50%, calc(-50% - 35px));
        font-size: 8rem;
      `}
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props: ContainerProps) =>
      props.position === 1
        ? 'linear-gradient(111.05deg, #3494E6 0%, #EC6EAD 138.8%)'
        : '#fff'};
    border-radius: 10px;
  }



`;

export const Trophy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/trophy.svg');
  background-size: 75% 75%;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 1;
`;
