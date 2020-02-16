import styled from 'styled-components';

interface Props {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  fullWidth?: boolean;
  width?: string;
}

const getWidth = (fullWidth?: boolean, width?: string) => {
  if (fullWidth && !width) return '100%';
  if (width) return width;
  return 'unset';
};

export const Container = styled.div<Props>`
  width: ${props => getWidth(props.fullWidth, props.width)};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};

  @media screen and (max-width: 992px) {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    & > div {
      max-width: calc(100% - 20px);
    }
  }
`;
