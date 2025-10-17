import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useProductDetails(productId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.products.retrieve(productId), [productId]);

  return useStripeApi(request);
}
