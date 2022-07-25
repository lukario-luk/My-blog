import styled from "styled-components";

export const TextDefault = styled.h2`
  width: ${({ width }) => width};
  padding:${({padding})=>padding};
  border-radius:${({borderRadius})=>borderRadius};
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  font-size: ${({ Size }) => Size};
  font-family:${({family})=>family};
  margin: ${({ margin }) => margin};   
  color: ${({ color }) => color};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  font-weight: ${({ Weight }) => Weight};
  text-align: ${({ Align }) => Align};
  font-style:${({Style})=>Style};
  background-color:${({bgColor})=>bgColor}
`;
TextDefault.defaultProps = {
    family: "'Roboto', sans-serif",
    color: "#ebf2fa",
  }