import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useInvoicesList() {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.invoices.list({ limit: 100, expand: ["data.customer"] }), []);

  return useStripeApi(request);
}
