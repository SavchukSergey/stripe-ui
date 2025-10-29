import { type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { PaymentIntentDetailsContainer } from "../components/PaymentIntentDetails/PaymentIntentDetailsContainer";

export const PaymentIntentDetailsPage: FC = () => {
  const { paymentIntentId } = useParams();
  const navigate = useNavigate();

  const handleCancelComplete = () => {
    navigate("/payment-intents");
  };

  if (!paymentIntentId) {
    return (
      <CommonPage>
        <h1>Payment Intent not found</h1>
      </CommonPage>
    );
  }

  return (
    <CommonPage>
      <PaymentIntentDetailsContainer paymentIntentId={paymentIntentId} onCancelComplete={handleCancelComplete} />
    </CommonPage>
  );
};
