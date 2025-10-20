import type { FC } from "react";
import type Stripe from "stripe";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { IntervalField } from "../IntervalField/IntervalField";
import { NumberField } from "../NumberField/NumberField";

export interface RecurrencyInputProps {
  readonly id?: string;
  readonly value: Stripe.Price.Recurring;
  onChange(value: Stripe.Price.Recurring): void;
  readonly readOnly?: boolean;
}

export const RecurrencyInput: FC<RecurrencyInputProps> = props => {

  const { value, onChange } = props;

  if (props.readOnly) {
    return `Every ${value.interval_count} ${value.interval}`;
  }

  return (
    <FieldSet>
      <IntervalField label="Interval" value={value.interval} onChange={newValue => onChange({ ...value, interval: newValue })} readOnly={props.readOnly} layout="horizontal" />
      <NumberField label="Count" value={value.interval_count} onChange={newValue => onChange({ ...value, interval_count: newValue })} readOnly={props.readOnly} layout="horizontal" />
    </FieldSet>
  );
};