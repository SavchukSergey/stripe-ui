import { useCallback } from "react";
import Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function usePaymentIntentsList() {
  const request = useCallback(
    (stripeInstance: Stripe) =>
      stripeInstance.paymentIntents.list({ expand: ["data.customer"] }),
    []
  );
  return useStripeApi(request);
}
