import styled from 'styled-components';

export const ContentDefault = styled.div`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
    padding:${({padding})=>padding};
    display:flex;
    flex-direction:${({flexDirection})=>flexDirection};
    justify-content:${({justifyContent})=>justifyContent};
    align-items:${({alignItems})=>alignItems};
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
    background-color:${({backgroundColor})=>backgroundColor};
    background-image:url(${({backgroundImage})=>backgroundImage});
    background-size:${({bgSize})=>bgSize};
    background-repeat:${({bgRepeat})=>bgRepeat};
    background-position:${({bgPosition})=>bgPosition};
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
