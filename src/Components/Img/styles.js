import styled from "styled-components";

export const ImgDefault = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  margin: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ cursor }) => cursor};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;