import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useEventsList() {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.events.list({ limit: 100 }), []);

  return useStripeApi(request);
}
