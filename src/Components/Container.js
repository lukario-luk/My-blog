import styled from 'styled-components';

export const ContainerDefault = styled.section`
  width:100%;
  padding:${({padding})=>padding};
  display:flex;
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  flex-direction:${({flexDirection})=>flexDirection};
  background-image:url(${({backgroundImage})=>backgroundImage});
  background-Color:${({bgColor})=>bgColor};
  overflow:auto;
  z-index:${({zIndex})=>zIndex};
    &::-webkit-scrollbar {
    width: 10px;
    position: fixed;
    }
    &::-webkit-scrollbar-track {
    border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: #606060; 
    border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb:hover {
    background-color: #2b2c28; 
    }
`;
ContainerDefault.defaultProps ={
  flexDirection:'column',
  position:'relative',
}