import { type FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Stripe from "stripe";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { PaymentIntentForm } from "../components/PaymentIntentForm/PaymentIntentForm";
import { usePaymentIntentCreate } from "../hooks/usePaymentIntentCreate";

const EMPTY_PAYMENT_INTENT = {
  id: "",
  object: "payment_intent",
  amount: 0,
  amount_capturable: 0,
  amount_details: {},
  amount_received: 0,
  application: null,
  application_fee_amount: null,
  automatic_payment_methods: null,
  canceled_at: null,
  cancellation_reason: null,
  capture_method: "automatic",
  client_secret: null,
  confirmation_method: "automatic",
  created: 0,
  currency: "usd",
  customer: null,
  description: null,
  invoice: null,
  last_payment_error: null,
  latest_charge: null,
  livemode: false,
  metadata: {},
  next_action: null,
  on_behalf_of: null,
  payment_method: null,
  payment_method_configuration_details: null,
  payment_method_options: null,
  payment_method_types: ["card"],
  processing: null,
  receipt_email: null,
  review: null,
  setup_future_usage: null,
  shipping: null,
  source: null,
  statement_descriptor: null,
  statement_descriptor_suffix: null,
  status: "requires_payment_method",
  transfer_data: null,
  transfer_group: null
} as unknown as Stripe.PaymentIntent;

export const NewPaymentIntentPage: FC = () => {
  const [paymentIntent, setPaymentIntent] = useState<Stripe.PaymentIntent>(EMPTY_PAYMENT_INTENT);
  const createPaymentIntent = usePaymentIntentCreate();
  const navigate = useNavigate();

  const handleSubmit = (value: Stripe.PaymentIntent) => {
    createPaymentIntent(value).then(created => {
      navigate(`/payment-intents/${created.id}`);
    });
  };

  return (
    <CommonPage>
      <h1>New Payment Intent</h1>
      <PaymentIntentForm
        value={paymentIntent}
        onChange={setPaymentIntent}
        onSubmit={handleSubmit}
      />
    </CommonPage>
  );
};
