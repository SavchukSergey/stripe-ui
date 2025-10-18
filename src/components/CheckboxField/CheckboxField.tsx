import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { CheckboxInput } from "../CheckboxInput/CheckboxInput";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";

export interface CheckboxFieldProps {
  readonly label: string;
  readonly value: boolean;
  readonly layout?: FormFieldLayoutType;
  onChange(value: boolean): void;
  readonly readOnly?: boolean;
}

export const CheckboxField: FC<CheckboxFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label} id={id} layout={props.layout}>
      <CheckboxInput id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
    </FormFieldLayout>
  );
};