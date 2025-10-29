import { useCallback, useContext } from "react";
import Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function usePaymentIntentCancel() {
  const api = useContext(StripeContext);

  const request = useCallback((paymentIntent: Stripe.PaymentIntent) => {
    if (!api) {
      return Promise.reject("No Stripe Key provided");
    }

    return api.paymentIntents.cancel(paymentIntent.id);
  }, [api]);

  return request;
}
