import { type FC } from "react";
import { useParams } from "react-router-dom";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { CustomerDetailsContainer } from "../components/CustomerDetails/CustomerDetailsContainer";
import { useCustomerSubscriptions } from "../hooks/useCustomerSubscriptions";
import { LoadingPanel } from "../components/LoadingPanel/LoadingPanel";
import { SubscriptionsList } from "../components/SubscriptionsList/SubscriptionsList";

export const CustomerDetailsPage: FC = () => {
  const { customerId } = useParams();
  const subscriptions = useCustomerSubscriptions(customerId || "");

  if (!customerId) {
    return (
      <CommonPage>
        <h1>Customer not found</h1>
      </CommonPage>
    );
  }

  return (
    <CommonPage>
      <CustomerDetailsContainer customerId={customerId} />

      {!subscriptions ? (
        <LoadingPanel />
      ) : (
        <section>
          <h3>Subscriptions</h3>
          {subscriptions.data.length === 0 ? (
            <p>No subscriptions found.</p>
          ) : (
            <SubscriptionsList subscriptions={subscriptions.data} />
          )}
        </section>
      )}
    </CommonPage>
  );
};
