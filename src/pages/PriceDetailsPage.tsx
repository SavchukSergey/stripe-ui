import type { FC } from "react";
import { useParams } from "react-router-dom";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { PriceDetailsContainer } from "../components/PriceDetails/PriceDetailsContainer";

export const PriceDetailsPage: FC = () => {
  const priceId = useParams()["priceId"]!;

  return (
    <CommonPage>
      <PriceDetailsContainer priceId={priceId} />
    </CommonPage>
  );
};