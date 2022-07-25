import styled from "styled-components";

export const RepositoryCardDefault = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  margin: ${({ margin }) => margin};
  border-radius:${({borderRadius})=>borderRadius};
  position:${({position})=>position};
  top:${({top})=>top};
  right:${({right})=>right};
  bottom:${({bottom})=>bottom};
  left:${({left})=>left};
  cursor: ${({ cursor }) => cursor};
  background-color: ${({ bgColor }) => bgColor};
  z-index:${({ZIx})=>ZIx};
  overflow:auto;
`;