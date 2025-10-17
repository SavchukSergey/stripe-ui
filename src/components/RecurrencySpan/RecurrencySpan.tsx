import type { FC } from "react";
import type Stripe from "stripe";

export interface RecurrencySpanProps {
    readonly recurring: Pick<Stripe.Price.Recurring, "interval" | "interval_count">;
}

export const RecurrencySpan: FC<RecurrencySpanProps> = ({ recurring }) => {
  const interval = recurring.interval;
  const intervalCount = recurring.interval_count;
  const text = intervalCount === 1
    ? interval
    : `${intervalCount} ${interval}s`;
  return <>{text}</>;
};
