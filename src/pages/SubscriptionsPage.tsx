import { type FC } from "react";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { Link } from "../components/Link/Link";
import { SubscriptionsListContainer } from "../components/SubscriptionsList/SubscriptionsListContainer";

export const SubscriptionsPage: FC = () => {

  return (
    <CommonPage>
      <h1>Subscriptions</h1>
      <SubscriptionsListContainer />
      <Link to="/subscriptions/new">Create subscription</Link>
    </CommonPage>
  );
};
