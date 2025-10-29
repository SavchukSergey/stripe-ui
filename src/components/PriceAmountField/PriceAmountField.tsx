import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";
import { PriceInput } from "../PriceInput/PriceInput";

export interface PriceAmountFieldProps {
  readonly label?: string;
  readonly value: number;
  readonly readOnly?: boolean;
  readonly layout?: FormFieldLayoutType;
  onChange?(value: number): void;
}

export const PriceAmountField: FC<PriceAmountFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Price"} id={id} layout={props.layout}>
      {props.readOnly ? <div className="form-control-plaintext">{(props.value / 100).toFixed(2)}</div> :
        <PriceInput id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
      }
    </FormFieldLayout>
  );
};