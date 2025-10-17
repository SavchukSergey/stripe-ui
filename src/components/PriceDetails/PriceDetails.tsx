import { useState, type FC } from "react";
import type Stripe from "stripe";
import { PriceForm } from "../PriceForm/PriceForm";

export interface PriceDetailsProps {
    readonly price: Stripe.Price;
}

export const PriceDetails: FC<PriceDetailsProps> = props => {
  const [value, setValue] = useState<Stripe.Price>(props.price);

  return (
    <section>
      <h2>{value.id}</h2>
      <PriceForm value={value} onChange={setValue} />
    </section>
  );
};