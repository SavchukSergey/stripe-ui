import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useProductsList() {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.products.list(), []);

  return useStripeApi(request);
}
