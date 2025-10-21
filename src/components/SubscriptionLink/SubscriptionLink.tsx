import type { FC } from "react";
import type Stripe from "stripe";
import { Link } from "../Link/Link";

export interface SubscriptionLinkProps {
  readonly subscription: Stripe.Subscription;
}

export const SubscriptionLink: FC<SubscriptionLinkProps> = props => {
  const { subscription } = props;

  return (
    <Link to={`/subscriptions/${subscription.id}`}>
      {subscription.id}
    </Link>
  );
};
