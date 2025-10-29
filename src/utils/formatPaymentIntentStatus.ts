import Stripe from "stripe";

export function formatPaymentIntentStatus(status: Stripe.PaymentIntent.Status): string {
  switch (status) {
    case "canceled":
      return "Canceled";
    case "processing":
      return "Processing";
    case "requires_action":
      return "Requires Action";
    case "requires_capture":
      return "Requires Capture";
    case "requires_confirmation":
      return "Requires Confirmation";
    case "requires_payment_method":
      return "Requires Payment Method";
    case "succeeded":
      return "Succeeded";
    default:
      return status;
  }
}
