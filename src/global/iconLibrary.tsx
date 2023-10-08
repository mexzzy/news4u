import React from "react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// register lottie and define custom element
defineElement(lottie.loadAnimation);

export type LordIconTrigger =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way";

export type LordIconColors = {
  primary?: string;
  secondary?: string;
};

export type LordIconProps = {
  src?: string; // Update the type to accept a URL string
  trigger?: LordIconTrigger;
  colors?: LordIconColors;
  delay?: string | number;
  size?: number;
};

export const LordIcon = ({
  colors,
  src,
  size,
  trigger,
  delay,
}: LordIconProps) => {
  return (
    <lord-icon
      colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
      src={src || ""} // Use an empty string as the default src value
      trigger={trigger || "hover"}
      delay={delay || "0"}
      style={{
        width: size,
        height: size,
      }}
      state={""}
    />
  );
};
