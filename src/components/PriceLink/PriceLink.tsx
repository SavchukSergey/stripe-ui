import type { FC } from "react";
import { Link } from "react-router-dom";
import type Stripe from "stripe";

export interface PriceLinkProps {
    readonly price: Stripe.Price;
}

export const PriceLink: FC<PriceLinkProps> = props => {
  return (
    <Link to={`/products/${props.price.product}/prices/${props.price.id}`}>{props.price.id}</Link>
  );
};