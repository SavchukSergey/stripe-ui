import type { FC } from "react";
import type Stripe from "stripe";

export interface CouponSpanProps {
  readonly coupon: Stripe.Coupon;
}

export const CouponSpan: FC<CouponSpanProps> = props => {
  const { coupon } = props;

  if (coupon.percent_off !== null && coupon.percent_off !== undefined) {
    return <span>{coupon.percent_off}% off</span>;
  }

  if (coupon.amount_off !== null && coupon.amount_off !== undefined) {
    const amount = (coupon.amount_off / 100).toFixed(2);
    const currency = (coupon.currency || "usd").toUpperCase();
    return <span>{amount} {currency} off</span>;
  }

  return <span>-</span>;
};
