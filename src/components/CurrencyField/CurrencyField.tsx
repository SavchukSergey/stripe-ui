import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { CurrencyInput } from "../CurrencyInput/CurrencyInput";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";

export interface CurrencyFieldProps {
  readonly label?: string;
  readonly value: string;
  onChange?(value: string): void;
  readonly readOnly?: boolean;
  readonly layout?: FormFieldLayoutType;
}

export const CurrencyField: FC<CurrencyFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Currency"} id={id} layout={props.layout}>
      {props.readOnly ?
        <div className="form-control-plaintext">{props.value}</div> :
        <CurrencyInput id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
      }
    </FormFieldLayout>
  );
};