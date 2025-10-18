import type { FC, PropsWithChildren } from "react";

import "./FieldSet.scss";

export interface FieldSetProps {
  readonly className?: string;
}

export const FieldSet: FC<PropsWithChildren<FieldSetProps>> = props => {
  return (
    <fieldset className={`fieldset ${props.className || ""}`}>
      {props.children}
    </fieldset>
  );
};