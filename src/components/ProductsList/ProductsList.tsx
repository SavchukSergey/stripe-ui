import type { FC } from "react";
import type Stripe from "stripe";
import { ProductLink } from "../ProductLink/ProductLink";

export interface ProductsListProps {
    readonly products: readonly Stripe.Product[];
}

export const ProductsList: FC<ProductsListProps> = props => {
  return (
    <table>
      <tbody>
        {props.products.map(product => (
          <tr key={product.id}>
            <th>
              <ProductLink product={product} />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

