import type { FC } from "react";
import { useParams } from "react-router-dom";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { ProductDetailsContainer } from "../components/ProductDetails/ProductDetailsContainer";

export const ProductDetailsPage: FC = () => {
  const productId = useParams()["productId"]!;

  return (
    <CommonPage>
      <ProductDetailsContainer productId={productId} />
    </CommonPage>
  );
};