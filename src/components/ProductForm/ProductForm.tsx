import type { FC } from "react";
import type Stripe from "stripe";
import { EntityActions } from "../EntityActions/EntityActions";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { Form } from "../Form/Form";
import { TextField } from "../TextField/TextField";

export interface ProductFormProps {
  readonly value: Stripe.Product;
  onChange(value: Stripe.Product): void;
  onSubmit(value: Stripe.Product): void;
}

export const ProductForm: FC<ProductFormProps> = props => {

  const { value, onChange } = props;

  const handleSubmit = () => {
    props.onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <TextField label="Name" value={value.name || ""} onChange={newVal => onChange({ ...value, name: newVal })} />
      </FieldSet>
      <EntityActions />
    </Form>
  );
};