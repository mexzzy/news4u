type LordIconTrigger =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way";


type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  colors?: string;
  delay?: string | number;
};

type LordIconElement = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  LordIconProps;

// lord-icon.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    "lord-icon": {
      src: string;
      trigger: string;
      colors: string;
      state: string;
      delay: string | number;
      style: React.CSSProperties;
    };
  }
}
