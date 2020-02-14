import styled from 'styled-components';

interface Props {
  slim?: boolean;
}

export const Container = styled.div<Props>`
  min-height: ${props => (props.slim ? '200px' : '450px')};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${props => (props.slim ? '25px 0 150px 0' : '100px 0 150px 0')};
  align-items: center;
  background: linear-gradient(
    107.93deg,
    #7f7fd5 0.17%,
    #86a8e7 52.17%,
    #91eae4 100%
  );

  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: ${props => (props.slim ? '1.5rem' : '1rem')};
    line-height: 1.25rem;
    text-align: ${props => (props.slim ? 'left' : 'center')};
    letter-spacing: 0.05rem;
    width: 100%;
    max-width: 1170px;
    padding-top: ${props => (props.slim ? '50px' : 'none')};
  }
`;
