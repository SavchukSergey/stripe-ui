import type { FC } from "react";
import type Stripe from "stripe";
import { Link } from "../Link/Link";

export interface CouponLinkProps {
  readonly coupon: Stripe.Coupon;
}

export const CouponLink: FC<CouponLinkProps> = props => {
  const displayName = props.coupon.name || props.coupon.id;

  return (
    <Link to={`/coupons/${props.coupon.id}`}>
      {displayName}
    </Link>
  );
};
