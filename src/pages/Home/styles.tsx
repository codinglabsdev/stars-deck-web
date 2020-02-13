import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`;

export const Header = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    107.93deg,
    #7f7fd5 0.17%,
    #86a8e7 52.17%,
    #91eae4 100%
  );
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  justify-self: flex-end;

  a {
    color: #fff;
    transition: opacity 0.2s;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
