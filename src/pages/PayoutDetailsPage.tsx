import { type FC } from "react";
import { useParams } from "react-router-dom";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { PayoutDetailsContainer } from "../components/PayoutDetails/PayoutDetailsContainer";

export const PayoutDetailsPage: FC = () => {
  const { payoutId } = useParams();

  if (!payoutId) {
    return (
      <CommonPage>
        <h1>Payout not found</h1>
      </CommonPage>
    );
  }

  return (
    <CommonPage>
      <PayoutDetailsContainer payoutId={payoutId} />
    </CommonPage>
  );
};
