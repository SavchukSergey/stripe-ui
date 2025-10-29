import type { FC } from "react";
import type Stripe from "stripe";
import { Link } from "../Link/Link";

export interface PaymentIntentLinkProps {
  readonly paymentIntent: Stripe.PaymentIntent;
}

export const PaymentIntentLink: FC<PaymentIntentLinkProps> = props => {
  const { paymentIntent } = props;

  return (
    <Link to={`/payment-intents/${paymentIntent.id}`}>
      {paymentIntent.id}
    </Link>
  );
};
