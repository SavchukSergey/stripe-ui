import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function usePayoutDetails(payoutId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.payouts.retrieve(payoutId), [payoutId]);

  return useStripeApi(request);
}
