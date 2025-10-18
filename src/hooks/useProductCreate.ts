import { useCallback, useContext } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function useProductCreate() {
  const api = useContext(StripeContext);

  const request = useCallback((product: Stripe.Product) => {
    return api ? api.products.create({
      name: product.name,
      description: product.description ?? undefined
    }) : Promise.reject("No Stripe Key provided");
  }, [api]);

  return request;
}
