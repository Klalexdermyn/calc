import React, { ReactNode } from "react";
// DRY
// DO NOT REPEAT YOURSELF
interface Props {
  size?: "SMALL" | "NORMAL" | "LARGE";
  style?: "DEFAULT" | "GREY" | "BLUE" | "LIGHTBLUE";
  alignement?: "VERTICAL" | "HORIZONTAL";
  content: ReactNode;
  handleBothClicks: any;
  clearButton: any;
  id: any;
}

const sizeClassnames = {
  SMALL: "button--small",
  NORMAL: "button",
  LARGE: "button--large",
};

const alignementClassnames = {
  VERTICAL: "button--vertical",
  HORIZONTAL: "button--horizontal",
};

const styleClassnames = {
  DEFAULT: "button--default",
  GREY: "button--grey",
  BLUE: "button--blue",
  LIGHTBLUE: "button--lightblue",
};

export function Button(props: Props) {
  const {
    id,
    clearButton,
    handleBothClicks,
    content,
    size = "NORMAL",
    style = "DEFAULT",
    alignement = "HORIZONTAL",
  } = props;
  return (
    <div
      className={`numbers ${sizeClassnames[size]} ${alignementClassnames[alignement]} ${styleClassnames[style]}`}
      onClick={content === "Ac" ? clearButton : handleBothClicks}
      id={id}
    >
      {content}
    </div>
  );
}
