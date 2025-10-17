import { type FC } from "react";
import { usePricesList } from "../../hooks/usePricesList";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { PricesList } from "./PricesList";

export interface PricesListContainerProps {
    readonly productId: string;
}

export const PricesListContainer: FC<PricesListContainerProps> = props => {
  const prices = usePricesList(props.productId);

  if (prices) {
    return (
      <PricesList prices={prices.data} />
    );
  }

  return <LoadingPanel />;
};

