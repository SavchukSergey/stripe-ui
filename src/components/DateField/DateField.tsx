import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { DateInput } from "../DateInput/DateInput";
import { DateSpan } from "../DateSpan/DateSpan";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";

export interface DateFieldProps {
  readonly label: string;
  readonly value: number;
  readonly layout?: FormFieldLayoutType;
  readonly readOnly?: boolean;
  onChange?(value: number): void;
}

export const DateField: FC<DateFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label} id={id} layout={props.layout}>
      {props.readOnly ? (
        <div className="form-control-plaintext"><DateSpan value={props.value} /></div>
      ) : (
        <DateInput id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
      )}
    </FormFieldLayout>
  );
};
