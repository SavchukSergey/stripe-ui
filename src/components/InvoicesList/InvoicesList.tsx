import type { FC } from "react";
import type Stripe from "stripe";
import { CustomerLink } from "../CustomerLink/CustomerLink";
import { DateCell } from "../DateCell/DateCell";
import { InvoiceLink } from "../InvoiceLink/InvoiceLink";
import { InvoiceStatusSpan } from "../InvoiceStatusSpan/InvoiceStatusSpan";
import { PriceCell } from "../PriceCell/PriceCell";
import { Table } from "../Table/Table";

export interface InvoicesListProps {
  readonly invoices: readonly Stripe.Invoice[];
}

export const InvoicesList: FC<InvoicesListProps> = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Due Date</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {props.invoices.map(invoice => {
          return (
            <tr key={invoice.id}>
              <td>
                <InvoiceLink invoice={invoice} />
              </td>
              <td>
                <CustomerLink customer={invoice.customer} />
              </td>
              <td>
                <InvoiceStatusSpan status={invoice.status} />
              </td>
              <PriceCell unit_amount={invoice.amount_due} currency={invoice.currency} />
              <DateCell value={invoice.due_date} />
              <DateCell value={invoice.created} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
