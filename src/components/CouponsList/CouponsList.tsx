import type { FC } from "react";
import type Stripe from "stripe";
import { CouponLink } from "../CouponLink/CouponLink";
import { CouponSpan } from "../CouponSpan/CouponSpan";
import { Table } from "../Table/Table";

export interface CouponsListProps {
  readonly coupons: readonly Stripe.Coupon[];
}

export const CouponsList: FC<CouponsListProps> = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID/Name</th>
          <th>Discount</th>
          <th>Duration</th>
          <th>Times Redeemed</th>
          <th>Max Redemptions</th>
        </tr>
      </thead>
      <tbody>
        {props.coupons.map(coupon => (
          <tr key={coupon.id}>
            <td>
              <CouponLink coupon={coupon} />
            </td>
            <td>
              <CouponSpan coupon={coupon} />
            </td>
            <td>{formatDuration(coupon)}</td>
            <td>{coupon.times_redeemed || 0}</td>
            <td>{coupon.max_redemptions || "Unlimited"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

function formatDuration(coupon: Stripe.Coupon): string {
  if (coupon.duration === "forever") {
    return "Forever";
  }
  if (coupon.duration === "once") {
    return "Once";
  }
  if (coupon.duration === "repeating") {
    return `${coupon.duration_in_months || 0} months`;
  }
  return "-";
}
