import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function usePayoutsList() {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.payouts.list({ limit: 100 }), []);

  return useStripeApi(request);
}
