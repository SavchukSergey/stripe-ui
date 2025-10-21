import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";

export function useCustomerDelete() {
  const api = useContext(StripeContext);
  const navigate = useNavigate();

  const request = useCallback((customer: Stripe.Customer) => {
    if (!api) {
      return Promise.reject("No Stripe Key provided");
    }

    return api.customers.del(customer.id).then(() => {
      navigate("/customers");
    });
  }, [api, navigate]);

  return request;
}
