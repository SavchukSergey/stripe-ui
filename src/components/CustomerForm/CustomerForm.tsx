import type { FC } from "react";
import type Stripe from "stripe";
import { EntityActions } from "../EntityActions/EntityActions";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { Form } from "../Form/Form";
import { TextField } from "../TextField/TextField";

export interface CustomerFormProps {
  readonly value: Stripe.Customer;
  onChange(value: Stripe.Customer): void;
  onSubmit(value: Stripe.Customer): void;
}

export const CustomerForm: FC<CustomerFormProps> = props => {

  const { value, onChange } = props;

  const handleSubmit = () => {
    props.onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <TextField label="Name" value={value.name || ""} onChange={newVal => onChange({ ...value, name: newVal })} />
        <TextField label="Email" value={value.email || ""} onChange={newVal => onChange({ ...value, email: newVal })} />
        <TextField label="Phone" value={value.phone || ""} onChange={newVal => onChange({ ...value, phone: newVal })} />
        <TextField label="Description" value={value.description || ""} onChange={newVal => onChange({ ...value, description: newVal })} />
      </FieldSet>
      <EntityActions />
    </Form>
  );
};
