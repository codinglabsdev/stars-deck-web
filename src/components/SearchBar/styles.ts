import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  flex: auto;
  padding-right: 70px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0 20px;
  color: #bdc3c7;

  input {
    color: ${darken(0.5, "#bdc3c7")};
    padding-left: 20px;

    &::placeholder {
      color: #bdc3c7;
    }
  }
`;
