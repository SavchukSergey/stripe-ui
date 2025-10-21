import type Stripe from "stripe";

export function formatSubscriptionStatus(status: Stripe.Subscription.Status): string {
  switch (status) {
    case "active":
      return "Active";
    case "canceled":
      return "Canceled";
    case "incomplete":
      return "Incomplete";
    case "incomplete_expired":
      return "Incomplete (Expired)";
    case "past_due":
      return "Past Due";
    case "paused":
      return "Paused";
    case "trialing":
      return "Trialing";
    case "unpaid":
      return "Unpaid";
    default:
      return status;
  }
}
