import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useEventDetails(eventId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.events.retrieve(eventId), [eventId]);

  return useStripeApi(request);
}
