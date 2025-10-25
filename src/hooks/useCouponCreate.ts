import { useCallback, useContext } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function useCouponCreate() {
  const api = useContext(StripeContext);

  const request = useCallback((coupon: Stripe.Coupon) => {
    if (!api) {
      return Promise.reject("No Stripe Key provided");
    }

    const params: Stripe.CouponCreateParams = {
      id: coupon.id || undefined,
      name: coupon.name ?? undefined,
      duration: coupon.duration
    };

    if (coupon.percent_off !== null && coupon.percent_off !== undefined) {
      params.percent_off = coupon.percent_off;
    } else if (coupon.amount_off !== null && coupon.amount_off !== undefined) {
      params.amount_off = coupon.amount_off;
      params.currency = coupon.currency ?? "usd";
    }

    if (coupon.duration === "repeating") {
      params.duration_in_months = coupon.duration_in_months ?? undefined;
    }

    if (coupon.max_redemptions !== null && coupon.max_redemptions !== undefined) {
      params.max_redemptions = coupon.max_redemptions;
    }

    if (coupon.redeem_by !== null && coupon.redeem_by !== undefined) {
      params.redeem_by = coupon.redeem_by;
    }

    return api.coupons.create(params);
  }, [api]);

  return request;
}
