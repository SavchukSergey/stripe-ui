import type { FC } from "react";
import type Stripe from "stripe";
import { CustomerLink } from "../CustomerLink/CustomerLink";
import { Table } from "../Table/Table";

export interface CustomersListProps {
  readonly customers: readonly Stripe.Customer[];
}

export const CustomersList: FC<CustomersListProps> = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.customers.map(customer => (
          <tr key={customer.id}>
            <td>
              <CustomerLink customer={customer} />
            </td>
            <td>{customer.email || "-"}</td>
            <td>{customer.phone || "-"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
