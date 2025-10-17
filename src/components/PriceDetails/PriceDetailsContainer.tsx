import { type FC } from "react";
import { usePriceDetails } from "../../hooks/usePriceDetails";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { PriceDetails } from "./PriceDetails";

export interface PriceDetailsContainerProps {
    readonly priceId: string;
}

export const PriceDetailsContainer: FC<PriceDetailsContainerProps> = props => {
  const priceId = props.priceId;

  const price = usePriceDetails(priceId);

  if (price) {
    return (
      <PriceDetails price={price} />
    );
  }

  return (
    <LoadingPanel />
  );
};
