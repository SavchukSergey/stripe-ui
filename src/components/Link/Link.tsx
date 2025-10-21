import type { FC, PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

import "./Link.scss";

export interface LinkProps {
  readonly to: string;
  readonly className?: string;
}

export const Link: FC<PropsWithChildren<LinkProps>> = props => {
  return (
    <RouterLink to={props.to} className={`link ${props.className}`}>{props.children}</RouterLink>
  );
};