import type { FC, PropsWithChildren } from "react";

import "./Button.scss";

type ButtonType = "submit" | "button";
type ButtonSeverity = "primary" | "danger";

export interface ButtonProps {
  type?: ButtonType;
  severity?: ButtonSeverity;
  onClick?: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  const type = props.type || "button";

  return (
    <button type={type} onClick={props.onClick} className={`btn btn-${props.severity || "primary"}`}>{props.children}</button>
  );
};