import { useCallback, useContext } from "react";
import Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";
import { getCustomerId } from "../utils/getCustomerId";

export function usePaymentIntentCreate() {
  const api = useContext(StripeContext);

  const request = useCallback((paymentIntent: Stripe.PaymentIntent) => {
    if (!api) {
      return Promise.reject("No Stripe Key provided");
    }

    return api.paymentIntents.create({
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      customer: paymentIntent.customer ? getCustomerId(paymentIntent.customer) : undefined,
      description: paymentIntent.description || undefined,
      metadata: paymentIntent.metadata ?? undefined,
      payment_method_types: paymentIntent.payment_method_types && paymentIntent.payment_method_types.length > 0
        ? paymentIntent.payment_method_types
        : ["card"],
    });
  }, [api]);

  return request;
}
