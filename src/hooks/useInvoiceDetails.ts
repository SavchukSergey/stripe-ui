import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useInvoiceDetails(invoiceId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.invoices.retrieve(invoiceId, { expand: ["customer"] }), [invoiceId]);

  return useStripeApi(request);
}
