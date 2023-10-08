import React from "react";
import { LordIcon } from "../iconLibrary";

type trigeerProps = {
  size?: number;
  colors?: { primary?: string; secondary?: string };
  trigger?:
    | "hover"
    | "click"
    | "loop"
    | "loop-on-hover"
    | "morph"
    | "morph-two-way";
  delay?: number;
};

const ChatIcon: React.FC<trigeerProps> = ({
  size = 24,
  colors = {},
  trigger = "loop",
  delay = 0,
}) => {
  return (
    <LordIcon
      src="/animated/wired-flat-981-consultation.json"
      size={size}
      colors={colors}
      trigger={trigger}
      delay={delay}
    />
  );
};

export default ChatIcon;
