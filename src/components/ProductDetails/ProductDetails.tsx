import type { FC } from "react";
import type Stripe from "stripe";
import { PricesListContainer } from "../PricesList/PricesListContainer";

export interface ProductDetailsProps {
    readonly product: Stripe.Product;
}

export const ProductDetails: FC<ProductDetailsProps> = props => {
  const { product } = props;
  return (
    <section>
      <h2>{product.name}</h2>

      <h3>Prices</h3>
      <PricesListContainer productId={product.id} />
    </section>
  );
};