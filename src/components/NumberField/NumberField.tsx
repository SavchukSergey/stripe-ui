import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";
import { NumberInput } from "../NumberInput/NumberInput";

export interface NumberFieldProps {
  readonly label: string;
  readonly value: number;
  readonly layout?: FormFieldLayoutType;
  onChange(value: number): void;
  readonly readOnly?: boolean;
}

export const NumberField: FC<NumberFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label} id={id} layout={props.layout}>
      <NumberInput id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
    </FormFieldLayout>
  );
};