import { useCallback } from "react";
import type Stripe from "stripe";
import { useStripeApi } from "./useStripeApi";

export function useCouponDetails(couponId: string) {
  const request = useCallback((stripeInstance: Stripe) => stripeInstance.coupons.retrieve(couponId), [couponId]);

  return useStripeApi(request);
}
