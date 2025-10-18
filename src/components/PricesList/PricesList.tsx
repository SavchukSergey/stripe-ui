import type { FC } from "react";
import type Stripe from "stripe";
import { DateSpan } from "../DateSpan/DateSpan";
import { PriceLink } from "../PriceLink/PriceLink";
import { PriceSpan } from "../PriceSpan/PriceSpan";
import { RecurrencySpan } from "../RecurrencySpan/RecurrencySpan";

export interface PricesListProps {
    readonly prices: readonly Stripe.Price[];
}

export const PricesList: FC<PricesListProps> = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Price</th>
          <th>Recurrency Period</th>
          <th>Lookup Key</th>
          <th>Active</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {props.prices.map(price => (
          <tr key={price.id}>
            <th>
              <PriceLink price={price} />
            </th>
            <td><PriceSpan price={price} /></td>
            <td>
              {price.type === "one_time" ? <>One-time</> :
                <RecurrencySpan recurring={price.recurring!} />}
            </td>
            <td>{price.lookup_key || "-"}</td>
            <td>{price.active ? "Yes" : "No"}</td>
            <td><DateSpan value={price.created} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

