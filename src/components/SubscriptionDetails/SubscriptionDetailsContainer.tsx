import { type FC } from "react";
import { useSubscriptionCancel } from "../../hooks/useSubscriptionCancel";
import { useSubscriptionDetails } from "../../hooks/useSubscriptionDetails";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { SubscriptionDetails } from "./SubscriptionDetails";

export interface SubscriptionDetailsContainerProps {
  readonly subscriptionId: string;
}
export const SubscriptionDetailsContainer: FC<SubscriptionDetailsContainerProps> = props => {
  const subscriptionId = props.subscriptionId;

  const subscription = useSubscriptionDetails(subscriptionId);
  const handleCancel = useSubscriptionCancel();

  if (subscription) {
    return (
      <SubscriptionDetails subscription={subscription} onCancel={() => handleCancel(subscription)} />
    );
  }

  return (
    <LoadingPanel />
  );
};
