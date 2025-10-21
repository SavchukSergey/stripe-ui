import type { FC } from "react";
import type Stripe from "stripe";
import { CustomerLink } from "../CustomerLink/CustomerLink";
import { DateSpan } from "../DateSpan/DateSpan";
import { PriceLink } from "../PriceLink/PriceLink";
import { PriceSpan } from "../PriceSpan/PriceSpan";
import { ProductLink } from "../ProductLink/ProductLink";
import { RemoveButton } from "../RemoveButton/RemoveButton";
import { SubscriptionStatusSpan } from "../SubscriptionStatusSpan/SubscriptionStatusSpan";
import { Table } from "../Table/Table";
import { calculateMRR } from "../../utils/calculateMRR";

export interface SubscriptionDetailsProps {
  readonly subscription: Stripe.Subscription;
  readonly onCancel?: () => void;
}

export const SubscriptionDetails: FC<SubscriptionDetailsProps> = props => {
  const { subscription } = props;
  const mrr = calculateMRR(subscription);
  const currency = subscription.items.data[0]?.price.currency || "usd";

  return (
    <section>
      <h2>Subscription {subscription.id}</h2>

      <dl>
        <dt>Customer</dt>
        <dd><CustomerLink customer={subscription.customer} /></dd>

        <dt>Status</dt>
        <dd><SubscriptionStatusSpan status={subscription.status} /></dd>

        <dt>MRR</dt>
        <dd><PriceSpan price={{ unit_amount: mrr, currency }} /></dd>

        <dt>Current Period</dt>
        <dd>
          <DateSpan value={(subscription as unknown as { current_period_start?: number }).current_period_start || 0} /> - <DateSpan value={(subscription as unknown as { current_period_end?: number }).current_period_end || 0} />
        </dd>

        <dt>Created</dt>
        <dd><DateSpan value={subscription.created} /></dd>
      </dl>

      <h3>Subscription Items</h3>
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {subscription.items.data.map(item => {
            const product = typeof item.price.product === "string" ? item.price.product : item.price.product;
            return (
              <tr key={item.id}>
                <td>
                  {typeof product === "string" ? product : (product && !("deleted" in product) && <ProductLink product={product} />)}
                </td>
                <td>
                  <PriceLink price={item.price} />
                </td>
                <td>{item.quantity || 1}</td>
                <td>
                  <PriceSpan price={{ unit_amount: (item.price.unit_amount || 0) * (item.quantity || 1), currency: item.price.currency }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {props.onCancel && subscription.status !== "canceled" && (
        <RemoveButton label="Cancel subscription" onClick={props.onCancel} />
      )}
    </section>
  );
};
