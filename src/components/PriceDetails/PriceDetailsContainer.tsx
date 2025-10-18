import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import type Stripe from "stripe";
import { usePriceDetails } from "../../hooks/usePriceDetails";
import { usePriceUpdate } from "../../hooks/usePriceUpdate";
import { getProductId } from "../../utils/getProductId";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { PriceDetails } from "./PriceDetails";

export interface PriceDetailsContainerProps {
  readonly priceId: string;
}

export const PriceDetailsContainer: FC<PriceDetailsContainerProps> = props => {
  const priceId = props.priceId;

  const price = usePriceDetails(priceId);

  const updatePrice = usePriceUpdate();

  const navigate = useNavigate();

  const handleSubmit = async (newPrice: Stripe.Price) => {
    await updatePrice(newPrice).then(res => {
      navigate(`/products/${getProductId(res.product)}`);
    });
  };

  if (price) {
    return (
      <PriceDetails price={price} onSubmit={handleSubmit} />
    );
  }

  return (
    <LoadingPanel />
  );
};
