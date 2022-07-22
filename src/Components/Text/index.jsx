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
    textAlign
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
    >
      {children}
    </TextDefault>
  );
};

export default Text;