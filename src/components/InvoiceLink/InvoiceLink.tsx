import type { FC } from "react";
import type Stripe from "stripe";
import { Link } from "../Link/Link";

export interface InvoiceLinkProps {
  readonly invoice: Stripe.Invoice;
}

export const InvoiceLink: FC<InvoiceLinkProps> = props => {
  const { invoice } = props;

  return (
    <Link to={`/invoices/${invoice.id}`}>
      {invoice.number || invoice.id}
    </Link>
  );
};
