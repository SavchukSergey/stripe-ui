import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function usePriceDetails(priceId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.prices.retrieve(priceId), [priceId]);

  return useStripeApi(request);
}
