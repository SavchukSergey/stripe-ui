import { useContext, useMemo } from "react";
import type Stripe from "stripe";
import { StripeContext } from "../context/StripeContext";
import { usePromise } from "./usePromise";

export function useStripeApi<T>(callback: (api: Stripe) => Promise<T>) {
  const api = useContext(StripeContext);
  const request = useMemo(() => api ? callback(api) : Promise.reject("No Stripe Key provided"), [api, callback]);

  return usePromise(request);
}