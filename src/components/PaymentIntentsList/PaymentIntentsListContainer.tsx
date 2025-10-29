import { type FC } from "react";
import { usePaymentIntentsList } from "../../hooks/usePaymentIntentsList";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { PaymentIntentsList } from "./PaymentIntentsList";

export const PaymentIntentsListContainer: FC = () => {
  const paymentIntents = usePaymentIntentsList();

  if (paymentIntents) {
    return (
      <PaymentIntentsList paymentIntents={paymentIntents.data} />
    );
  }

  return <LoadingPanel />;
};
