import type Stripe from "stripe";

export function getCustomerId(value: string | Stripe.Customer | Stripe.DeletedCustomer | null) {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return value.id;
}
