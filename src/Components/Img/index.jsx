import React from "react";
import { ImgDefault } from "./styled";

const Img = ({
  src,
  alt,
  width,
  height,
  border,
  margin,
  borderRadius,
  cursor,
  backgroundColor,
}) => {
  return (
    <ImgDefault
      src={src}
      alt={alt}
      width={width}
      height={height}
      border={border}
      margin={margin}
      borderRadius={borderRadius}
      cursor={cursor}
      backgroundColor={backgroundColor}
    />
  );
};