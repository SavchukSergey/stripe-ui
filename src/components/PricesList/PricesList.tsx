import type { FC } from "react";
import type Stripe from "stripe";
import { ActiveCell } from "../ActiveCell/ActiveCell";
import { DateCell } from "../DateCell/DateCell";
import { PriceCell } from "../PriceCell/PriceCell";
import { PriceLink } from "../PriceLink/PriceLink";
import { RecurrencySpan } from "../RecurrencySpan/RecurrencySpan";
import { Table } from "../Table/Table";

export interface PricesListProps {
  readonly prices: readonly Stripe.Price[];
}

export const PricesList: FC<PricesListProps> = props => {
  return (
    <Table>
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
            <PriceCell unit_amount={price.unit_amount} currency={price.currency} />
            <td>
              {price.type === "one_time" ? <>One-time</> :
                <RecurrencySpan recurring={price.recurring!} />}
            </td>
            <td>{price.lookup_key || "-"}</td>
            <ActiveCell value={price.active} />
            <DateCell value={price.created} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

