import type { FC } from "react";
import { Link } from "react-router-dom";
import type Stripe from "stripe";
import { PricesListContainer } from "../PricesList/PricesListContainer";
import { RemoveButton } from "../RemoveButton/RemoveButton";

export interface ProductDetailsProps {
  readonly product: Stripe.Product;
  readonly onRemove?: () => void;
}

export const ProductDetails: FC<ProductDetailsProps> = props => {
  const { product } = props;
  return (
    <section>
      <h2>{product.name}</h2>

      <h3>Prices</h3>
      <PricesListContainer productId={product.id} />

      <Link to={`/products/${product.id}/prices/new`}>Create price</Link>

      {props.onRemove && <RemoveButton label="Remove product" onClick={props.onRemove} />}
    </section>
  );
};