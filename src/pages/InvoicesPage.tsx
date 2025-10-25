import { type FC } from "react";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { InvoicesListContainer } from "../components/InvoicesList/InvoicesListContainer";

export const InvoicesPage: FC = () => {

  return (
    <CommonPage>
      <h1>Invoices</h1>
      <InvoicesListContainer />
    </CommonPage>
  );
};
