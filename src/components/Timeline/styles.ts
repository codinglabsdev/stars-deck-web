import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: linear-gradient(to bottom, #009fff, #ec2f4b);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
  }
`;

export const Tail = styled.div`
  padding-bottom: 50px;
  position: relative;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: linear-gradient(to bottom, #ec2f4b, rgba(255, 255, 255, 0));
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
  }
`;

export const Empty = styled.div`
  padding: 50px 0;
  color: #000;
  width: 100%;
  text-align: center;
`;

interface EventProps {
  points: number;
}

export const Event = styled.div<EventProps>`
  padding: 10px 40px;
  margin: 30px 0;
  position: relative;
  background-color: inherit;
  width: 50%;

  &::after {
    content: ${props => `"${props.points.toString()}"`};
    font-size: 0.9rem;
    font-weight: 700;
    text-align: center;
    position: absolute;
    width: 16px;
    height: 16px;
    right: -8px;
    color: #009fff;
    top: 25px;
    border-radius: 50%;
    z-index: 1;
  }
  &::before {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    right: -19px;
    background: #fff;
    border: 3px solid #009fff;
    top: 14px;
    border-radius: 50%;
    z-index: 1;
  }
  &.left {
    left: 0;
  }
  &.right {
    left: 50%;
    &::after {
      left: -8px;
    }
    &::before {
      left: -19px;
    }
  }
`;

interface ContentProps {
  link?: boolean;
}

export const Content = styled.div<ContentProps>`
  padding: 20px 30px;
  background-color: #fff;
  position: relative;
  border-radius: 6px;
  width: 100%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  color: #000;

  ${props =>
    props.link &&
    css`
      cursor: pointer;
      transition: all 0.75s ease-in-out;
      &:hover {
        transform: scale(1.025);
      }
    `}

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: 700;
      font-size: 1rem;
    }
  }

  .info {
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
  }

  .description {
    padding-top: 10px;
  }
`;
