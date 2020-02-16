import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  form {
    display: contents;
  }

  .buttons {
    margin-left: 70px;
    display: flex;
    justify-content: flex-end;
    flex: auto;
  }

  .mobile {
    display: none;
    flex-wrap: nowrap;
    min-width: fit-content;
    button {
      display: inline-block;
    }
  }

  @media screen and (max-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 999;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    .buttons {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
`;
