import type { FC } from "react";
import type Stripe from "stripe";
import { Link } from "../Link/Link";
import { getCustomerId } from "../../utils/getCustomerId";

export interface CustomerLinkProps {
  readonly customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;
}

export const CustomerLink: FC<CustomerLinkProps> = props => {
  if (!props.customer) {
    return <span>-</span>;
  }

  const customerId = getCustomerId(props.customer);
  const displayName = typeof props.customer === "object" && "name" in props.customer && props.customer.name
    ? props.customer.name
    : customerId;

  return (
    <Link to={`/customers/${customerId}`}>
      {displayName}
    </Link>
  );
};
