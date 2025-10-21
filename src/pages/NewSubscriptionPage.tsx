import { type FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Stripe from "stripe";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { SubscriptionForm } from "../components/SubscriptionForm/SubscriptionForm";
import { useSubscriptionCreate } from "../hooks/useSubscriptionCreate";

const EMPTY_SUBSCRIPTION = {
  id: "",
  object: "subscription",
  application: null,
  application_fee_percent: null,
  automatic_tax: {
    enabled: false,
    liability: null,
    disabled_reason: null
  },
  billing_cycle_anchor: 0,
  billing_mode: "charge_automatically",
  billing_cycle_anchor_config: null,
  billing_thresholds: null,
  cancel_at: null,
  cancel_at_period_end: false,
  canceled_at: null,
  cancellation_details: null,
  collection_method: "charge_automatically",
  created: 0,
  currency: "usd",
  customer: "",
  days_until_due: null,
  default_payment_method: null,
  default_source: null,
  default_tax_rates: null,
  description: null,
  discounts: [],
  ended_at: null,
  invoice_settings: {
    account_tax_ids: null,
    issuer: {
      type: "self"
    }
  },
  items: {
    object: "list",
    data: [],
    has_more: false,
    url: ""
  },
  latest_invoice: null,
  livemode: false,
  metadata: {},
  next_pending_invoice_item_invoice: null,
  on_behalf_of: null,
  pause_collection: null,
  payment_settings: null,
  pending_invoice_item_interval: null,
  pending_setup_intent: null,
  pending_update: null,
  schedule: null,
  start_date: 0,
  status: "incomplete",
  test_clock: null,
  transfer_data: null,
  trial_end: null,
  trial_settings: null,
  trial_start: null
} as unknown as Stripe.Subscription;

export const NewSubscriptionPage: FC = () => {
  const [subscription, setSubscription] = useState<Stripe.Subscription>(EMPTY_SUBSCRIPTION);
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [selectedPriceId, setSelectedPriceId] = useState<string>("");
  const createSubscription = useSubscriptionCreate();
  const navigate = useNavigate();

  const handleCustomerChange = (customerId: string) => {
    setSubscription({ ...subscription, customer: customerId });
  };

  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
    setSelectedPriceId(""); // Reset price when product changes
  };

  const handlePriceChange = (priceId: string) => {
    setSelectedPriceId(priceId);
    // Update subscription items with minimal price object
    const minimalPrice: Pick<Stripe.Price, "id"> & Partial<Stripe.Price> = { id: priceId };

    setSubscription({
      ...subscription,
      items: {
        ...subscription.items,
        data: [{
          id: "",
          object: "subscription_item",
          billing_thresholds: null,
          created: 0,
          discounts: [],
          metadata: {},
          price: minimalPrice as Stripe.Price,
          quantity: 1,
          subscription: "",
          tax_rates: [],
          plan: null
        } as unknown as Stripe.SubscriptionItem]
      }
    });
  };

  const handleSubmit = (value: Stripe.Subscription) => {
    createSubscription(value).then(created => {
      navigate(`/subscriptions/${created.id}`);
    });
  };

  return (
    <CommonPage>
      <h1>New Subscription</h1>
      <SubscriptionForm
        value={subscription}
        selectedProductId={selectedProductId}
        selectedPriceId={selectedPriceId}
        onCustomerChange={handleCustomerChange}
        onProductChange={handleProductChange}
        onPriceChange={handlePriceChange}
        onSubmit={handleSubmit}
      />
    </CommonPage>
  );
};
