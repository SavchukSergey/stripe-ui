import type { FC } from "react";
import type Stripe from "stripe";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";
import { RecurrencyInput } from "../RecurrencyInput/RecurrencyInput";

export interface RecurrencyFieldProps {
  readonly label?: string;
  readonly value: Stripe.Price.Recurring;
  readonly layout?: FormFieldLayoutType;
  onChange(value: Stripe.Price.Recurring): void;
  readonly readOnly?: boolean;
}

export const RecurrencyField: FC<RecurrencyFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Recurrency"} id={id} layout={props.layout}>
      <RecurrencyInput id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
    </FormFieldLayout>
  );
};