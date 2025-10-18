import { useCallback, useContext } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function usePriceUpdate() {
  const api = useContext(StripeContext);

  const request = useCallback((price: Stripe.Price) => {
    return api ? api.prices.update(price.id, {
      nickname: price.nickname ?? undefined,
      lookup_key: price.lookup_key ?? undefined,
      // currency_options: {
      //   [price.currency]: {
      //     unit_amount: price.unit_amount ?? undefined,
      //   }
      // },
      active: price.active
    }) : Promise.reject("No Stripe Key provided");
  }, [api]);

  return request;
}
