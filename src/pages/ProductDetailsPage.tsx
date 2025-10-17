import type { FC } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailsContainer } from "../components/ProductDetails/ProductDetailsContainer";

export const ProductDetailsPage: FC = () => {
  const productId = useParams()["productId"]!;

  return (
    <ProductDetailsContainer productId={productId} />
  );
};