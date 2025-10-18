import { useCallback, useContext } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";
import { getProductId } from "../utils/getProductId";

export function usePriceCreate() {
  const api = useContext(StripeContext);

  const request = useCallback((price: Stripe.Price) => {
    return api ? api.prices.create({
      nickname: price.nickname ?? undefined,
      lookup_key: price.lookup_key ?? undefined,
      currency: price.currency,
      unit_amount: price.unit_amount ?? undefined,
      product: getProductId(price.product),
      recurring: price.recurring ? {
        ...price.recurring,
        meter: price.recurring.meter ?? undefined,
        trial_period_days: price.recurring.trial_period_days ?? undefined,
        usage_type: "licensed"
      } : undefined,
      active: price.active
    }) : Promise.reject("No Stripe Key provided");
  }, [api]);

  return request;
}
