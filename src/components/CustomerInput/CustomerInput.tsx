import type { FC } from "react";
import type Stripe from "stripe";
import { useCustomersList } from "../../hooks/useCustomersList";
import { getCustomerId } from "../../utils/getCustomerId";

export interface CustomerInputProps {
  readonly id?: string;
  readonly value: string | Stripe.Customer | Stripe.DeletedCustomer | null;
  onChange?(value: string): void;
  readonly readOnly?: boolean;
}

export const CustomerInput: FC<CustomerInputProps> = props => {
  const customers = useCustomersList();
  const customerId = props.value ? getCustomerId(props.value) : "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange && props.onChange(e.target.value);
  };

  return (
    <select
      id={props.id}
      value={customerId}
      onChange={handleChange}
      disabled={props.readOnly}
      className="form-control"
    >
      <option value="">Select a customer</option>
      {customers?.data.map(customer => (
        <option key={customer.id} value={customer.id}>
          {customer.name || customer.email || customer.id}
        </option>
      ))}
    </select>
  );
};
