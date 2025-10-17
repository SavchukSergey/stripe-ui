import { type FC } from "react";
import { useProductDetails } from "../../hooks/useProductDetails";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { ProductDetails } from "./ProductDetails";

export interface ProductDetailsContainerProps {
    readonly productId: string;
}
export const ProductDetailsContainer: FC<ProductDetailsContainerProps> = props => {
  const productId = props.productId;

  const product = useProductDetails(productId);

  if (product) {
    return (
      <ProductDetails product={product} />
    );
  }

  return (
    <LoadingPanel />
  );
};

