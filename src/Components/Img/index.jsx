import React from "react";
import { ImgDefault } from "./styles";

const Img = ({
  SRC,
  Alt,
  width,
  height,
  border,
  margin,
  borderRadius,
  display,
  position,
  top,
  right,
  bottom,
  left,
  cursor,
  bgColor,
}) => {
  return (
    <ImgDefault
      src={SRC}
      alt={Alt}
      width={width}
      height={height}
      border={border}
      margin={margin}
      borderRadius={borderRadius}
      display={display}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      cursor={cursor}
      bgColor={bgColor}
    />
  );
};

export default Img