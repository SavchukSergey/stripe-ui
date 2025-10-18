import type Stripe from "stripe";

export function getProductId(value: string | Stripe.Product | Stripe.DeletedProduct) {
  if (typeof value === "string") {
    return value;
  }

  return value.id;
}