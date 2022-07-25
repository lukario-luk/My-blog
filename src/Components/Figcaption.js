import styled from 'styled-components';

export const FigcaptionDefault = styled.figcaption`
  width:${({width})=>width};  
  display:flex;
  padding:${({padding})=>padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  flex-direction:${({flexDirection})=>flexDirection};
  background-color:${({bgColor})=>bgColor}
`;
FigcaptionDefault.defaultProps ={
  flexDirection:'column',
}