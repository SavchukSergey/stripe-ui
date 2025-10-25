import { type FC } from "react";
import { usePayoutDetails } from "../../hooks/usePayoutDetails";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { PayoutDetails } from "./PayoutDetails";

export interface PayoutDetailsContainerProps {
  readonly payoutId: string;
}

export const PayoutDetailsContainer: FC<PayoutDetailsContainerProps> = props => {
  const payoutId = props.payoutId;

  const payout = usePayoutDetails(payoutId);

  if (payout) {
    return (
      <PayoutDetails payout={payout} />
    );
  }

  return (
    <LoadingPanel />
  );
};
