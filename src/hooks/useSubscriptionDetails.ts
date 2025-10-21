import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useSubscriptionDetails(subscriptionId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.subscriptions.retrieve(subscriptionId, { expand: ["customer"] }), [subscriptionId]);

  return useStripeApi(request);
}
