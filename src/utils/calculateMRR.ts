import type Stripe from "stripe";

export function calculateMRR(subscription: Stripe.Subscription): number {
  let total = 0;

  for (const item of subscription.items.data) {
    const price = item.price;
    const unitAmount = price.unit_amount || 0;
    const quantity = item.quantity || 1;

    if (price.recurring) {
      const { interval, interval_count } = price.recurring;
      let monthlyAmount = unitAmount * quantity;

      // Convert to monthly
      if (interval === "year") {
        monthlyAmount = monthlyAmount / 12;
      } else if (interval === "week") {
        monthlyAmount = monthlyAmount * 4.33; // Average weeks per month
      } else if (interval === "day") {
        monthlyAmount = monthlyAmount * 30;
      }

      // Adjust for interval count
      if (interval_count > 1) {
        monthlyAmount = monthlyAmount / interval_count;
      }

      total += monthlyAmount;
    }
  }

  return Math.round(total);
}
