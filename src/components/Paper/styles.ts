import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  min-height: 100%;
  max-width: 1170px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 55px 100px;
  margin-top: -75px;
  margin-bottom: 75px;
  position: relative;

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.mobile {
      @media screen and (max-width: 992px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        padding: 5px;
        z-index: 99;
      }
    }
  }

  @media screen and (max-width: 992px) {
    margin-top: 0;
    padding: 0;
    box-shadow: none;
    & > button {
      margin: 10px 0;
    }
  }
`;
