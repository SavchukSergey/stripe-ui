import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useCustomerSubscriptions(customerId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.subscriptions.list({ customer: customerId }), [customerId]);

  return useStripeApi(request);
}
