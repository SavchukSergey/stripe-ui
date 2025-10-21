import type Stripe from "stripe";

export function getCustomerId(value: string | Stripe.Customer | Stripe.DeletedCustomer) {
  if (typeof value === "string") {
    return value;
  }

  return value.id;
}
