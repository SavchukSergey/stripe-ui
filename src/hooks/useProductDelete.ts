import { useCallback, useContext } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function useProductDelete() {
  const api = useContext(StripeContext);

  const request = useCallback((product: Stripe.Product) => {
    return api ? api.products.del(product.id) : Promise.reject("No Stripe Key provided");
  }, [api]);

  return request;
}
