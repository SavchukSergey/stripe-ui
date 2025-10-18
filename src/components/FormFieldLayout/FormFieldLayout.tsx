import type { FC, PropsWithChildren } from "react";

import "./FormFieldLayout.scss";

export type FormFieldLayoutType = "horizontal" | "vertical";

export interface FormFieldLayoutProps {
  readonly id?: string;
  readonly label: string;
  readonly layout?: FormFieldLayoutType;
}

export const FormFieldLayout: FC<PropsWithChildren<FormFieldLayoutProps>> = props => {

  const type = props.layout || "vertical";

  return (
    <div className={`form-field-layout form-field-layout--${type}`}>
      <label htmlFor={props.id} className="form-field-layout__label">
        {props.label}
      </label>
      <div>
        {props.children}
      </div>
    </div>
  );
};