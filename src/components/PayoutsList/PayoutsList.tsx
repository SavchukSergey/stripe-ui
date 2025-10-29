import type { FC } from "react";
import type Stripe from "stripe";
import { DateCell } from "../DateCell/DateCell";
import { PayoutLink } from "../PayoutLink/PayoutLink";
import { PayoutStatusSpan } from "../PayoutStatusSpan/PayoutStatusSpan";
import { PriceCell } from "../PriceCell/PriceCell";
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
              <PriceCell unit_amount={payout.amount} currency={payout.currency} />
              <td>
                <PayoutStatusSpan status={payout.status} />
              </td>
              <td>{payout.method || "-"}</td>
              <DateCell value={payout.arrival_date} />
              <DateCell value={payout.created} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
