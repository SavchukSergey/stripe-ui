import { useCallback, useContext } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function useCustomerCreate() {
  const api = useContext(StripeContext);

  const request = useCallback((customer: Stripe.Customer) => {
    return api ? api.customers.create({
      name: customer.name ?? undefined,
      email: customer.email ?? undefined,
      phone: customer.phone ?? undefined,
      description: customer.description ?? undefined
    }) : Promise.reject("No Stripe Key provided");
  }, [api]);

  return request;
}
