import { type FC } from "react";
import { useCustomerDelete } from "../../hooks/useCustomerDelete";
import { useCustomerDetails } from "../../hooks/useCustomerDetails";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { CustomerDetails } from "./CustomerDetails";

export interface CustomerDetailsContainerProps {
  readonly customerId: string;
}
export const CustomerDetailsContainer: FC<CustomerDetailsContainerProps> = props => {
  const customerId = props.customerId;

  const customer = useCustomerDetails(customerId);
  const handleRemove = useCustomerDelete();

  if (customer && !("deleted" in customer)) {
    return (
      <CustomerDetails
        customer={customer}
        onRemove={() => handleRemove(customer)}
      />
    );
  }

  return (
    <LoadingPanel />
  );
};
