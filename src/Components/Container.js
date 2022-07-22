import styled from 'styled-components';

export const ContainerDefault = styled.section`
  width:100%;
  padding:${({padding})=>padding};
  display:flex;
  flex-direction:column;
  background-image:url(${({backgroundImage})=>backgroundImage});
  overflow:auto;
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
