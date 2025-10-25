import { type FC } from "react";
import { useInvoiceDetails } from "../../hooks/useInvoiceDetails";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { InvoiceDetails } from "./InvoiceDetails";

export interface InvoiceDetailsContainerProps {
  readonly invoiceId: string;
}

export const InvoiceDetailsContainer: FC<InvoiceDetailsContainerProps> = props => {
  const invoiceId = props.invoiceId;

  const invoice = useInvoiceDetails(invoiceId);

  if (invoice) {
    return (
      <InvoiceDetails invoice={invoice} />
    );
  }

  return (
    <LoadingPanel />
  );
};
