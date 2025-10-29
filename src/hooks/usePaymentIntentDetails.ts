import { useCallback } from "react";
import Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function usePaymentIntentDetails(paymentIntentId: string) {
  const request = useCallback(
    (stripeInstance: Stripe) =>
      stripeInstance.paymentIntents.retrieve(paymentIntentId, { expand: ["customer"] }),
    [paymentIntentId]
  );
  return useStripeApi(request);
}
