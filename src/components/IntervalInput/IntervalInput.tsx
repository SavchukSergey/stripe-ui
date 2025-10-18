import type { FC } from "react";
import type Stripe from "stripe";

export interface IntervalInputProps {
  readonly id?: string;
  readonly value: Stripe.Price.Recurring.Interval;
  onChange(value: Stripe.Price.Recurring.Interval): void;
  readonly readOnly?: boolean;
}

export const IntervalInput: FC<IntervalInputProps> = props => {
  return (
    <select
      id={props.id}
      value={props.value}
      onChange={(ev => props.onChange(ev.target.value as Stripe.Price.Recurring.Interval))}
      disabled={props.readOnly}
    >
      <option value="day">Dayly</option>
      <option value="month">Monthly</option>
      <option value="week">Weekly</option>
      <option value="year">Yearly</option>
    </select>
  );
};