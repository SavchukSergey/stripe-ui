import { type FC } from "react";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { PayoutsListContainer } from "../components/PayoutsList/PayoutsListContainer";

export const PayoutsPage: FC = () => {

  return (
    <CommonPage>
      <h1>Payouts</h1>
      <PayoutsListContainer />
    </CommonPage>
  );
};
