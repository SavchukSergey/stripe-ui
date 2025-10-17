import type { FC } from "react";
import type Stripe from "stripe";

interface PriceSpanProps {
    readonly price: Pick<Stripe.Price, "unit_amount" | "currency">;
}

export const PriceSpan: FC<PriceSpanProps> = ({ price }) => {
  const amount = price.unit_amount !== null
    ? (price.unit_amount / 100).toFixed(2)
    : "N/A";
  const currency = price.currency.toUpperCase();

  return <>{amount} {currency}</>;
};