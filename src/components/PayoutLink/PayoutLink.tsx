import type { FC } from "react";
import type Stripe from "stripe";
import { Link } from "../Link/Link";

export interface PayoutLinkProps {
  readonly payout: Stripe.Payout;
}

export const PayoutLink: FC<PayoutLinkProps> = props => {
  const { payout } = props;

  return (
    <Link to={`/payouts/${payout.id}`}>
      {payout.id}
    </Link>
  );
};
