import { type FC } from "react";
import { useParams } from "react-router-dom";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { InvoiceDetailsContainer } from "../components/InvoiceDetails/InvoiceDetailsContainer";

export const InvoiceDetailsPage: FC = () => {
  const { invoiceId } = useParams();

  if (!invoiceId) {
    return (
      <CommonPage>
        <h1>Invoice not found</h1>
      </CommonPage>
    );
  }

  return (
    <CommonPage>
      <InvoiceDetailsContainer invoiceId={invoiceId} />
    </CommonPage>
  );
};
