import styled from 'styled-components';

export const CiteDefault = styled.cite`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
    padding:${({padding})=>padding};
    display:${({display})=>display};
    flex-direction:${({flexDirection})=>flexDirection};
    justify-content:${({justifyContent})=>justifyContent};
    align-items:${({alignItems})=>alignItems};
`;
CiteDefault.defaultProps = {
    display:'flex',
}
