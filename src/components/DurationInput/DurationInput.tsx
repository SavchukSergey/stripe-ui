import type { FC } from "react";
import type Stripe from "stripe";

export interface DurationInputProps {
  readonly id?: string;
  readonly value: Stripe.Coupon.Duration;
  onChange(value: Stripe.Coupon.Duration): void;
  readonly readOnly?: boolean;
}

export const DurationInput: FC<DurationInputProps> = props => {
  return (
    <select
      id={props.id}
      value={props.value}
      className="form-select"
      onChange={(ev => props.onChange(ev.target.value as Stripe.Coupon.Duration))}
      disabled={props.readOnly}
    >
      <option value="forever">Forever</option>
      <option value="once">Once</option>
      <option value="repeating">Repeating</option>
    </select>
  );
};
