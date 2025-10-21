import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useSubscriptionsList() {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.subscriptions.list({ expand: ["data.customer"] }), []);

  return useStripeApi(request);
}
