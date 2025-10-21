import type { FC } from "react";
import type Stripe from "stripe";
import { formatSubscriptionStatus } from "../../utils/formatSubscriptionStatus";
import "./SubscriptionStatusSpan.scss";

export interface SubscriptionStatusSpanProps {
  readonly status: Stripe.Subscription.Status;
}

export const SubscriptionStatusSpan: FC<SubscriptionStatusSpanProps> = props => {
  return (
    <span className={`subscription-status subscription-status--${props.status}`}>
      {formatSubscriptionStatus(props.status)}
    </span>
  );
};
