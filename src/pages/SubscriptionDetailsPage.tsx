import { type FC } from "react";
import { useParams } from "react-router-dom";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { SubscriptionDetailsContainer } from "../components/SubscriptionDetails/SubscriptionDetailsContainer";

export const SubscriptionDetailsPage: FC = () => {
  const { subscriptionId } = useParams();

  if (!subscriptionId) {
    return (
      <CommonPage>
        <h1>Subscription not found</h1>
      </CommonPage>
    );
  }

  return (
    <CommonPage>
      <SubscriptionDetailsContainer subscriptionId={subscriptionId} />
    </CommonPage>
  );
};
