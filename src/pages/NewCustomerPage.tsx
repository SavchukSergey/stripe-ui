import { type FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Stripe from "stripe";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { CustomerForm } from "../components/CustomerForm/CustomerForm";
import { useCustomerCreate } from "../hooks/useCustomerCreate";

const EMPTY_CUSTOMER: Stripe.Customer = {
  id: "",
  object: "customer",
  created: 0,
  livemode: false,
  name: null,
  email: null,
  phone: null,
  description: null,
  address: null,
  balance: 0,
  currency: null,
  delinquent: null,
  discount: null,
  invoice_prefix: null,
  invoice_settings: {
    custom_fields: null,
    default_payment_method: null,
    footer: null,
    rendering_options: null
  },
  metadata: {},
  preferred_locales: null,
  shipping: null,
  tax_exempt: null,
  test_clock: null,
  default_source: null
};

export const NewCustomerPage: FC = () => {
  const [customer, setCustomer] = useState<Stripe.Customer>(EMPTY_CUSTOMER);
  const createCustomer = useCustomerCreate();
  const navigate = useNavigate();

  const handleSubmit = (value: Stripe.Customer) => {
    createCustomer(value).then(created => {
      navigate(`/customers/${created.id}`);
    });
  };

  return (
    <CommonPage>
      <h1>New Customer</h1>
      <CustomerForm value={customer} onChange={setCustomer} onSubmit={handleSubmit} />
    </CommonPage>
  );
};
