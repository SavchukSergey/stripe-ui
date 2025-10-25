import type { FC } from "react";
import type Stripe from "stripe";
import { DateSpan } from "../DateSpan/DateSpan";
import { PayoutLink } from "../PayoutLink/PayoutLink";
import { PayoutStatusSpan } from "../PayoutStatusSpan/PayoutStatusSpan";
import { PriceSpan } from "../PriceSpan/PriceSpan";
import { Table } from "../Table/Table";

export interface PayoutsListProps {
  readonly payouts: readonly Stripe.Payout[];
}

export const PayoutsList: FC<PayoutsListProps> = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Method</th>
          <th>Arrival Date</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {props.payouts.map(payout => {
          return (
            <tr key={payout.id}>
              <td>
                <PayoutLink payout={payout} />
              </td>
              <td>
                <PriceSpan price={{ unit_amount: payout.amount, currency: payout.currency }} />
              </td>
              <td>
                <PayoutStatusSpan status={payout.status} />
              </td>
              <td>{payout.method || "-"}</td>
              <td>
                {payout.arrival_date ? <DateSpan value={payout.arrival_date} /> : "-"}
              </td>
              <td>
                <DateSpan value={payout.created} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
