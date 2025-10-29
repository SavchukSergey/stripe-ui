import { type FC } from "react";
import { usePaymentIntentCancel } from "../../hooks/usePaymentIntentCancel";
import { usePaymentIntentDetails } from "../../hooks/usePaymentIntentDetails";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { PaymentIntentDetails } from "./PaymentIntentDetails";

export interface PaymentIntentDetailsContainerProps {
  readonly paymentIntentId: string;
  readonly onCancelComplete?: () => void;
}

export const PaymentIntentDetailsContainer: FC<PaymentIntentDetailsContainerProps> = props => {
  const paymentIntentId = props.paymentIntentId;

  const paymentIntent = usePaymentIntentDetails(paymentIntentId);
  const cancelPaymentIntent = usePaymentIntentCancel();

  const handleCancel = () => {
    cancelPaymentIntent(paymentIntent!).then(() => {
      props.onCancelComplete?.();
    });
  };

  if (paymentIntent) {
    return (
      <PaymentIntentDetails paymentIntent={paymentIntent} onCancel={handleCancel} />
    );
  }

  return (
    <LoadingPanel />
  );
};
