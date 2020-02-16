import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 576px){
    height: 100vh;
    
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
