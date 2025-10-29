import type { FC } from "react";
import type Stripe from "stripe";
import { CustomerSelectField } from "../CustomerSelectField/CustomerSelectField";
import { EntityActions } from "../EntityActions/EntityActions";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { Form } from "../Form/Form";
import { PriceField } from "../PriceField/PriceField";
import { TextField } from "../TextField/TextField";

export interface PaymentIntentFormProps {
  readonly value: Stripe.PaymentIntent;
  onChange(value: Stripe.PaymentIntent): void;
  onSubmit(value: Stripe.PaymentIntent): void;
}

export const PaymentIntentForm: FC<PaymentIntentFormProps> = props => {

  const { value, onChange } = props;

  const handleSubmit = () => {
    props.onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <PriceField
          label="Price"
          price={{ unit_amount: value.amount || 0, currency: value.currency || "" }}
          onChange={newVal => onChange({ ...value, amount: newVal.unit_amount || 0, currency: newVal.currency })}
          layout="horizontal" />

        <CustomerSelectField
          label="Customer (optional)"
          value={value.customer || ""}
          onChange={newVal => onChange({ ...value, customer: newVal || null })}
          layout="horizontal"
        />
        <TextField
          label="Description (optional)"
          value={value.description || ""}
          onChange={newVal => onChange({ ...value, description: newVal })}
          layout="horizontal"
        />
      </FieldSet>
      <EntityActions />
    </Form>
  );
};
