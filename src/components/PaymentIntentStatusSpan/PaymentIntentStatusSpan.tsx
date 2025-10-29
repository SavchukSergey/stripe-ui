import type { FC } from "react";
import type Stripe from "stripe";
import { formatPaymentIntentStatus } from "../../utils/formatPaymentIntentStatus";
import "./PaymentIntentStatusSpan.scss";

export interface PaymentIntentStatusSpanProps {
  readonly status: Stripe.PaymentIntent.Status;
}

export const PaymentIntentStatusSpan: FC<PaymentIntentStatusSpanProps> = props => {
  return (
    <span className={`payment-intent-status payment-intent-status--${props.status}`}>
      {formatPaymentIntentStatus(props.status)}
    </span>
  );
};
