import styled, { css } from 'styled-components';

interface ContainerProps {
  position: number;
  podium?: boolean;
}

const height = (position: number) => {
  if (position === 1) return '400px';
  if (position === 2) return '300px';
  if (position === 3) return '250px';
  return '100px';
};

const shadow = (position: number) => {
  if (position === 1) return '5px 10px 10px rgba(0, 0, 0, 0.3)';
  if (position === 2) return '2px 5px 10px rgba(0, 0, 0, 0.2)';
  if (position === 3) return '0px 5px 10px rgba(0, 0, 0, 0.2)';
  return '0px 2px 10px rgba(0, 0, 0, 0.1)';
};

const getPosition = (position: number) => {
  if (position === 1) return 2;
  if (position === 2) return 1;
  return 3;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  box-shadow: ${props => shadow(props.position)};
  border-radius: 10px;
  width: ${props => (props.podium ? '100%' : '570px')};
  padding: 0 25px 25px;
  height: ${props => height(props.position)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: ${props =>
    props.podium ? getPosition(props.position) : props.position};
  color: ${(props: ContainerProps) => (props.position === 1 ? '#fff' : '#000')};
  transition: all 1s ease;
  cursor: pointer;

  ${props =>
    props.podium &&
    css`
      max-width: 300px;
      min-width: 300px;
      margin: 0 10px;
      @media screen and (max-width: 992px) {
          order: ${props.position};
        }
    `}

  img {
    z-index: 1;
  }

  h2 {
    padding-top: 130px;
    z-index: 1;
    &.points {
      font-size: 3.25rem;
      padding-top: 45px;
      padding-bottom: 50px;
    }
  }

  &:hover {
    transform: scale(1.05);
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
      props.podium &&
      css`
        left: 50%;
        transform: ${props.position === 1
          ? 'translate(calc(-50% - 3px), calc(-50% - 35px))'
          : 'translate(-50%, -50%)'};
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

  ${props =>
    props.position === 1 &&
    css`
      z-index: 1;
    `}

  ${props =>
    props.position > 3 &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 25px;

      img {
        position: relative;
        transform: none;
        left: 0;
      }

      h2 {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        &.position {
          padding-right: 25px;
        }
        &.name {
          font-family: Lato, sans-serif;
          font-size: 1rem;
          font-weight: 300;
        }
        &.points {
          font-family: Lato, sans-serif;
          font-size: 1rem;
          font-weight: 700;
          span {
            display: block;
            font-size: 0.6rem;
            font-weight: 500;
          }
        }
      }
      &:before {
        display: none;
      }
    `}

    @media screen and (max-width: 576px) {
    width: 100%;
    &:first-of-type{
      margin-top: 50px;
      border-top: 1px solid #c2c2c2;
    }
  }

  @media screen and (max-width: 992px) {
    ${props =>
      !props.podium &&
      css`
        box-shadow: none;
        border-radius: 0%;
        border-bottom: 1px solid #c2c2c2;
        padding: 0 20px;

        img {
          box-shadow: none;
          border: none;
        }

        h2 {
          &.position {
            padding-right: 10px;
          }
          &.name {
            font-size: 0.9rem;
            font-weight: 400;
            text-align: left;
            padding: 0 10px;
            text-transform: none;
            letter-spacing: normal;
          }
          &.points {
            font-weight: 700;
          }
        }
        &:before {
          display: none;
        }

        &:last-of-type {
          border-bottom: none;
        }
      `}
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
