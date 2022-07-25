import React from "react";
import { TextDefault } from "./styles";

const Text = ({
    children,
    width,
    margin,
    padding,
    borderRadius,
    color,
    Size,
    letterSpacing,
    Weight,
    Align,
    Family,
    Style,
    bgColor
}) => {
  return (
    <TextDefault
        width={width}   
        margin={margin}
        padding={padding}
        color={color}
        Size={Size}
        letterSpacing={letterSpacing}
        Weight={Weight}
        Align={Align}
        Family={Family}
        Style={Style}
        bgColor={bgColor}
        borderRadius={borderRadius}
    >
      {children}
    </TextDefault>
  );
};

export default Text;