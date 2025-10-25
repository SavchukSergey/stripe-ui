import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useCouponsList() {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.coupons.list(), []);

  return useStripeApi(request);
}
