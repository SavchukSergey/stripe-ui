import { type FC } from "react";
import { usePayoutsList } from "../../hooks/usePayoutsList";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { PayoutsList } from "./PayoutsList";

export const PayoutsListContainer: FC = () => {
  const payouts = usePayoutsList();

  if (payouts) {
    return (
      <PayoutsList payouts={payouts.data} />
    );
  }

  return <LoadingPanel />;
};
