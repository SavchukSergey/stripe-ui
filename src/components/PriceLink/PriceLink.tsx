import type { FC } from "react";
import type Stripe from "stripe";
import { Link } from "../Link/Link";

export interface PriceLinkProps {
  readonly price: Stripe.Price;
}

export const PriceLink: FC<PriceLinkProps> = props => {
  return (
    <Link to={`/products/${props.price.product}/prices/${props.price.id}`}>{props.price.nickname || props.price.id}</Link>
  );
};