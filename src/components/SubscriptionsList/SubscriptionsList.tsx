import type { FC } from "react";
import type Stripe from "stripe";
import { CustomerLink } from "../CustomerLink/CustomerLink";
import { DateSpan } from "../DateSpan/DateSpan";
import { PriceSpan } from "../PriceSpan/PriceSpan";
import { SubscriptionLink } from "../SubscriptionLink/SubscriptionLink";
import { SubscriptionStatusSpan } from "../SubscriptionStatusSpan/SubscriptionStatusSpan";
import { Table } from "../Table/Table";
import { calculateMRR } from "../../utils/calculateMRR";

export interface SubscriptionsListProps {
  readonly subscriptions: readonly Stripe.Subscription[];
}

export const SubscriptionsList: FC<SubscriptionsListProps> = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Status</th>
          <th>MRR</th>
          <th>Current Period</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        {props.subscriptions.map(subscription => {
          const mrr = calculateMRR(subscription);
          const currency = subscription.items.data[0]?.price.currency || "usd";

          return (
            <tr key={subscription.id}>
              <td>
                <SubscriptionLink subscription={subscription} />
              </td>
              <td>
                <CustomerLink customer={subscription.customer} />
              </td>
              <td>
                <SubscriptionStatusSpan status={subscription.status} />
              </td>
              <td>
                <PriceSpan price={{ unit_amount: mrr, currency }} />
              </td>
              <td>
                <DateSpan value={(subscription as unknown as { current_period_start?: number }).current_period_start || 0} /> - <DateSpan value={(subscription as unknown as { current_period_end?: number }).current_period_end || 0} />
              </td>
              <td>
                {subscription.items.data.length} item{subscription.items.data.length !== 1 ? "s" : ""}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
