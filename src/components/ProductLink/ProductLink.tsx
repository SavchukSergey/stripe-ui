import type { FC } from "react";
import { Link } from "react-router-dom";
import type Stripe from "stripe";

export interface ProductLinkProps {
  readonly product: Stripe.Product;
}

export const ProductLink: FC<ProductLinkProps> = props => {
  return (
    <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
  );
};