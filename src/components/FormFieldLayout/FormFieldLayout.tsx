import type { FC, PropsWithChildren } from "react";

export interface FormFieldLayoutProps {
    readonly id?: string;
    readonly label: string;
}
export const FormFieldLayout: FC<PropsWithChildren<FormFieldLayoutProps>> = props => {

  return (
    <div className="form-field-layout">
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <div>
        {props.children}
      </div>
    </div>
  );
};