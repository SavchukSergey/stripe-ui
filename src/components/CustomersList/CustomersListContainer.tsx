import { type FC } from "react";
import { useCustomersList } from "../../hooks/useCustomersList";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { CustomersList } from "./CustomersList";

export const CustomersListContainer: FC = () => {
  const customers = useCustomersList();

  if (customers) {
    return (
      <CustomersList customers={customers.data} />
    );
  }

  return <LoadingPanel />;
};
