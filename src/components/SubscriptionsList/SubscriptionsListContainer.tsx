import { type FC } from "react";
import { useSubscriptionsList } from "../../hooks/useSubscriptionsList";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { SubscriptionsList } from "./SubscriptionsList";

export const SubscriptionsListContainer: FC = () => {
  const subscriptions = useSubscriptionsList();

  if (subscriptions) {
    return (
      <SubscriptionsList subscriptions={subscriptions.data} />
    );
  }

  return <LoadingPanel />;
};
