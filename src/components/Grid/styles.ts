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
`;
