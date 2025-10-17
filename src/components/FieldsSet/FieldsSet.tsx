import type { FC, PropsWithChildren } from "react";

import "./FieldSet.scss";

export const FieldSet: FC<PropsWithChildren> = props => {
  return (
    <fieldset className="fieldset">
      {props.children}
    </fieldset>
  );
};