import type { FC } from "react";
import type Stripe from "stripe";
import { CustomerLink } from "../CustomerLink/CustomerLink";
import { DateSpan } from "../DateSpan/DateSpan";
import { PriceCell } from "../PriceCell/PriceCell";
import { PaymentIntentLink } from "../PaymentIntentLink/PaymentIntentLink";
import { PaymentIntentStatusSpan } from "../PaymentIntentStatusSpan/PaymentIntentStatusSpan";
import { Table } from "../Table/Table";

export interface PaymentIntentsListProps {
  readonly paymentIntents: readonly Stripe.PaymentIntent[];
}

export const PaymentIntentsList: FC<PaymentIntentsListProps> = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Created</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.paymentIntents.map(paymentIntent => {
          return (
            <tr key={paymentIntent.id}>
              <td>
                <PaymentIntentLink paymentIntent={paymentIntent} />
              </td>
              <td>
                {paymentIntent.customer ? (
                  <CustomerLink customer={paymentIntent.customer} />
                ) : (
                  <span>-</span>
                )}
              </td>
              <td>
                <PaymentIntentStatusSpan status={paymentIntent.status} />
              </td>
              <PriceCell unit_amount={paymentIntent.amount} currency={paymentIntent.currency} />
              <td>
                <DateSpan value={paymentIntent.created} />
              </td>
              <td>
                {paymentIntent.description || "-"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
