import { useCallback, useContext } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";
import { getCustomerId } from "../utils/getCustomerId";

export function useSubscriptionCreate() {
  const api = useContext(StripeContext);

  const request = useCallback((subscription: Stripe.Subscription) => {
    if (!api) {
      return Promise.reject("No Stripe Key provided");
    }

    const items = subscription.items.data.map(item => ({
      price: typeof item.price === "string" ? item.price : item.price.id
    }));

    return api.subscriptions.create({
      customer: getCustomerId(subscription.customer),
      items: items,
      metadata: subscription.metadata ?? undefined
    });
  }, [api]);

  return request;
}
