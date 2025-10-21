import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useCustomerDetails(customerId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.customers.retrieve(customerId), [customerId]);

  return useStripeApi(request);
}
