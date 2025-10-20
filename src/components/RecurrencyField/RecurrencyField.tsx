import type { FC } from "react";
import type Stripe from "stripe";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";
import { RecurrencyInput } from "../RecurrencyInput/RecurrencyInput";

export interface RecurrencyFieldProps {
  readonly label?: string;
  readonly value: Stripe.Price.Recurring | undefined | null;
  readonly layout?: FormFieldLayoutType;
  onChange(value: Stripe.Price.Recurring): void;
  readonly readOnly?: boolean;
}

export const RecurrencyField: FC<RecurrencyFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Recurrency"} id={id} layout={props.layout}>
      {props.value ? <RecurrencyInput id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly} /> :
        <div className="form-control-plaintext">One-time</div>}
    </FormFieldLayout>
  );
};