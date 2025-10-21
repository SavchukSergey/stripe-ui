import { useCallback, useContext } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function useSubscriptionUpdate() {
  const api = useContext(StripeContext);

  const request = useCallback((subscription: Stripe.Subscription) => {
    if (!api) {
      return Promise.reject("No Stripe Key provided");
    }

    const items = subscription.items.data.map(item => ({
      id: item.id,
      price: typeof item.price === "string" ? item.price : item.price.id
    }));

    return api.subscriptions.update(subscription.id, {
      items: items,
      metadata: subscription.metadata ?? undefined
    });
  }, [api]);

  return request;
}
