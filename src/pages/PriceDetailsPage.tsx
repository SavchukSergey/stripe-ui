import type { FC } from "react";
import { useParams } from "react-router-dom";
import { PriceDetailsContainer } from "../components/PriceDetails/PriceDetailsContainer";

export const PriceDetailsPage: FC = () => {
  const priceId = useParams()["priceId"]!;

  return (
    <PriceDetailsContainer priceId={priceId} />
  );
};