import styled from "styled-components";

interface Props {
  size?: number;
}

export const Container = styled.img.attrs<Props>({
  alt: "Profile Picture"
})<Props>`
  width: ${props => `${props.size ? props.size : 150}px`};
  height: ${props => `${props.size ? props.size : 150}px`};
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
`;
