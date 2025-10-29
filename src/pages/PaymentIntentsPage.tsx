import { type FC } from "react";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { Link } from "../components/Link/Link";
import { PaymentIntentsListContainer } from "../components/PaymentIntentsList/PaymentIntentsListContainer";

export const PaymentIntentsPage: FC = () => {

  return (
    <CommonPage>
      <h1>Payment Intents</h1>
      <PaymentIntentsListContainer />
      <Link to="/payment-intents/new">Create payment intent</Link>
    </CommonPage>
  );
};
