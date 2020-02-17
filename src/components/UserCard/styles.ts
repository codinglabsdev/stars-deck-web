import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: 48px;
  margin-left: 25px;
  position: relative;
  .data {
    height: 48px;
    width: 300px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: #000;

    .profile {
      flex: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
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
          max-width: 200px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: pre;
          &.points {
            font-weight: 400;
          }
        }
      }
    }

    @media screen and (max-width: 992px) {
      box-shadow: none;
      margin: 0;
      flex: auto;
      img {
        box-shadow: none;
      }
      .info {
        flex-direction: row;
        align-items: center;
        max-width: 175px;
      }
    }
  }
`;
