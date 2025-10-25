import type { FC } from "react";
import type Stripe from "stripe";
import "./InvoiceStatusSpan.scss";

export interface InvoiceStatusSpanProps {
  readonly status: Stripe.Invoice.Status | null;
}

export const InvoiceStatusSpan: FC<InvoiceStatusSpanProps> = props => {
  const status = props.status || "unknown";

  const formatStatus = (status: string) => {
    return status.replace(/_/g, " ");
  };

  return (
    <span className={`invoice-status invoice-status--${status}`}>
      {formatStatus(status)}
    </span>
  );
};
