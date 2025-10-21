import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useCustomersList() {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.customers.list(), []);

  return useStripeApi(request);
}
