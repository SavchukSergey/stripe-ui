import { type FC } from "react";
import { useProductsList } from "../../hooks/useProductsList";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { ProductsList } from "./ProductsList";

export const ProductsListContainer: FC = () => {
  const products = useProductsList();

  if (products) {
    return (
      <ProductsList products={products.data} />
    );
  }

  return <LoadingPanel />;
};
