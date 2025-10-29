import type { FC } from "react";
import type Stripe from "stripe";
import { DateField } from "../DateField/DateField";
import { EmailField } from "../EmailField/EmailField";
import { RemoveButton } from "../RemoveButton/RemoveButton";
import "./CustomerDetails.scss";

export interface CustomerDetailsProps {
  readonly customer: Stripe.Customer;
  readonly onRemove?: () => void;
}

export const CustomerDetails: FC<CustomerDetailsProps> = props => {
  const { customer } = props;
  return (
    <section className="customer-details">
      <h2>{customer.name || customer.id}</h2>

      <dl>
        <EmailField label="Email" value={customer.email} layout="horizontal" readOnly />

        <dt>Phone</dt>
        <dd>{customer.phone || "-"}</dd>

        <dt>Description</dt>
        <dd>{customer.description || "-"}</dd>

        <DateField label="Created" value={customer.created} layout="horizontal" readOnly />
      </dl>

      {props.onRemove && <RemoveButton label="Remove customer" onClick={props.onRemove} />}
    </section>
  );
};
