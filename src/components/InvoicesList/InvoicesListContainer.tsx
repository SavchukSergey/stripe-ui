import { type FC } from "react";
import { useInvoicesList } from "../../hooks/useInvoicesList";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { InvoicesList } from "./InvoicesList";

export const InvoicesListContainer: FC = () => {
  const invoices = useInvoicesList();

  if (invoices) {
    return (
      <InvoicesList invoices={invoices.data} />
    );
  }

  return <LoadingPanel />;
};
