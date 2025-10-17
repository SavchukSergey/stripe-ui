import type { FC, PropsWithChildren } from "react";

import "./Button.scss";

type ButtonType = "submit" | "button";

export interface ButtonProps {
  type?: ButtonType;
  onClick?: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  const type = props.type || "button";

  return (
    <button type={type} onClick={props.onClick}>{props.children}</button>
  );
};