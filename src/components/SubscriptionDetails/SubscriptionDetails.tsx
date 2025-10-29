import type { FC } from "react";
import type Stripe from "stripe";
import { calculateMRR } from "../../utils/calculateMRR";
import { useHtmlId } from "../../utils/useHtmlId";
import { CustomerSelectField } from "../CustomerSelectField/CustomerSelectField";
import { DateField } from "../DateField/DateField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { PriceCell } from "../PriceCell/PriceCell";
import { PriceField } from "../PriceField/PriceField";
import { PriceLink } from "../PriceLink/PriceLink";
import { ProductLink } from "../ProductLink/ProductLink";
import { RemoveButton } from "../RemoveButton/RemoveButton";
import { SubscriptionStatusSpan } from "../SubscriptionStatusSpan/SubscriptionStatusSpan";
import { Table } from "../Table/Table";

export interface SubscriptionDetailsProps {
  readonly subscription: Stripe.Subscription;
  readonly onCancel?: () => void;
}

export const SubscriptionDetails: FC<SubscriptionDetailsProps> = props => {
  const { subscription } = props;
  const mrr = calculateMRR(subscription);
  const currency = subscription.items.data[0]?.price.currency || "usd";
  const statusId = useHtmlId();

  return (
    <section>
      <h2>Subscription {subscription.id}</h2>

      <FieldSet>
        <CustomerSelectField
          label="Customer"
          value={subscription.customer}
          readOnly
          layout="horizontal"
        />

        <FormFieldLayout label="Status" id={statusId} layout="horizontal">
          <div className="form-control-plaintext">
            <SubscriptionStatusSpan status={subscription.status} />
          </div>
        </FormFieldLayout>

        <PriceField
          label="MRR"
          price={{ unit_amount: mrr, currency }}
          layout="horizontal"
          readOnly
        />

        <DateField
          label="Current Period Start"
          value={(subscription as unknown as { current_period_start?: number }).current_period_start || 0}
          readOnly
          layout="horizontal"
        />

        <DateField
          label="Current Period End"
          value={(subscription as unknown as { current_period_end?: number }).current_period_end || 0}
          readOnly
          layout="horizontal"
        />

        <DateField
          label="Created"
          value={subscription.created}
          readOnly
          layout="horizontal"
        />
      </FieldSet>

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
                <PriceCell unit_amount={(item.price.unit_amount || 0) * (item.quantity || 1)} currency={item.price.currency} />
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
