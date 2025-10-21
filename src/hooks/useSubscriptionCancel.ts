import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function useSubscriptionCancel() {
  const api = useContext(StripeContext);
  const navigate = useNavigate();

  const request = useCallback((subscription: Stripe.Subscription) => {
    if (!api) {
      return Promise.reject("No Stripe Key provided");
    }

    return api.subscriptions.cancel(subscription.id).then(() => {
      navigate("/subscriptions");
    });
  }, [api, navigate]);

  return request;
}
