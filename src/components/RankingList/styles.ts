import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 45px;
  margin-top: 50px;
`;

export const Podium = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-height: 450px;

  @media screen and (max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 100px;
    max-height: unset;
    justify-items: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c2c2c2;
  margin-top: 75px;
  margin-bottom: 50px;
  max-width: 970px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
  grid-gap: 25px;

  @media screen and (max-width: 992px) {
    grid-gap: 0;
  }
`;
