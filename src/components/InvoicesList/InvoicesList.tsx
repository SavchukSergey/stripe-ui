import type { FC } from "react";
import type Stripe from "stripe";
import { CustomerLink } from "../CustomerLink/CustomerLink";
import { DateSpan } from "../DateSpan/DateSpan";
import { InvoiceLink } from "../InvoiceLink/InvoiceLink";
import { InvoiceStatusSpan } from "../InvoiceStatusSpan/InvoiceStatusSpan";
import { PriceSpan } from "../PriceSpan/PriceSpan";
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
              <td>
                <PriceSpan price={{ unit_amount: invoice.amount_due, currency: invoice.currency }} />
              </td>
              <td>
                {invoice.due_date ? <DateSpan value={invoice.due_date} /> : "-"}
              </td>
              <td>
                <DateSpan value={invoice.created} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
