import styled from 'styled-components';

export const FiureDefault = styled.figure`
  width:${({width})=>width};
  padding:${({padding})=>padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  display:flex;
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  flex-direction:${({flexDirection})=>flexDirection};
  background-color:${({bgColor})=>bgColor};
  z-index:4 ;
`;
FiureDefault.defaultProps ={
  flexDirection:'column',
}