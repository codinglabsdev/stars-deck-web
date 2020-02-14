import styled from 'styled-components';

export const Container = styled.div`
  height: 48px;
  width: 200px;
  margin-left: 25px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  color: #000;
  img {
    position: relative;
    left: 0;
    transform: none;
    border: none;
  }

  .info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    span {
      font-size: 0.8rem;
      font-weight: 600;
      &.points {
        font-weight: 400;
      }
    }
  }
`;
