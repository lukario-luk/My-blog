import styled from 'styled-components';

export const SectionDefault = styled.section`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    display:flex;
    flex-direction:${({flexDirection})=>flexDirection};
    justify-content:${({justifyContent})=>justifyContent};
    align-items:${({alignItems})=>alignItems};
    border: ${({ border }) => border};
    margin: ${({ margin }) => margin};
    padding:${({padding})=>padding};
    border-radius: ${({ borderRadius }) => borderRadius};
`;
