import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function usePricesList(productId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.prices.list({
    product: productId
  }), [productId]);

  return useStripeApi(request);
}
