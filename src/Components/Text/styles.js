import styled from "styled-components";

export const TextDefault = styled.h1`
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
  font-family:${({fontFamily})=>fontFamily};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
`;
TextDefault.defaultProps = {
    color: "#ebf2fa",
    fontFamily: "Roboto, sans-serif",

  };