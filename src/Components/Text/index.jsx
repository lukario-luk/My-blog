import React from "react";
import { TextDefault } from "./styles";

const Text = ({
    children,
    width,
    margin,
    color,
    fontSize,
    letterSpacing,
    fontWeight,
    textAlign,
    fontFamily
}) => {
  return (
    <TextDefault
        width={width}   
        margin={margin}
        color={color}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        fontWeight={fontWeight}
        textAlign={textAlign}
        fontFamily={fontFamily}
    >
      {children}
    </TextDefault>
  );
};

export default Text;