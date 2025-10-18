import type { FC } from "react";
import type Stripe from "stripe";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";
import { IntervalInput } from "../IntervalInput/IntervalInput";

export interface IntervalFieldProps {
  readonly label: string;
  readonly value: Stripe.Price.Recurring.Interval;
  readonly layout?: FormFieldLayoutType;
  onChange(value: Stripe.Price.Recurring.Interval): void;
  readonly readOnly?: boolean;
}

export const IntervalField: FC<IntervalFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label} id={id} layout={props.layout}>
      <IntervalInput id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
    </FormFieldLayout>
  );
};