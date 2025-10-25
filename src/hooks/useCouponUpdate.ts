import { useCallback, useContext } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function useCouponUpdate() {
  const api = useContext(StripeContext);

  const request = useCallback((coupon: Stripe.Coupon) => {
    if (!api) {
      return Promise.reject("No Stripe Key provided");
    }

    return api.coupons.update(coupon.id, {
      name: coupon.name ?? undefined,
      metadata: coupon.metadata
    });
  }, [api]);

  return request;
}
