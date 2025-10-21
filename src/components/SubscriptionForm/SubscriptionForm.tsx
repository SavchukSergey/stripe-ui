import type { FC } from "react";
import type Stripe from "stripe";
import { CustomerSelectField } from "../CustomerSelectField/CustomerSelectField";
import { EntityActions } from "../EntityActions/EntityActions";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { Form } from "../Form/Form";
import { PriceSelectField } from "../PriceSelectField/PriceSelectField";
import { ProductField } from "../ProductField/ProductField";

export interface SubscriptionFormProps {
  readonly value: Stripe.Subscription;
  readonly selectedProductId: string;
  readonly selectedPriceId: string;
  onCustomerChange(customerId: string): void;
  onProductChange(productId: string): void;
  onPriceChange(priceId: string): void;
  onSubmit(value: Stripe.Subscription): void;
}

export const SubscriptionForm: FC<SubscriptionFormProps> = props => {

  const { value } = props;

  const handleSubmit = () => {
    props.onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <CustomerSelectField
          label="Customer"
          value={value.customer}
          onChange={props.onCustomerChange}
          layout="horizontal"
        />
        <ProductField
          label="Product"
          value={props.selectedProductId}
          onChange={props.onProductChange}
          layout="horizontal"
        />
        {props.selectedProductId && (
          <PriceSelectField
            label="Price"
            productId={props.selectedProductId}
            value={props.selectedPriceId}
            onChange={props.onPriceChange}
            layout="horizontal"
          />
        )}
      </FieldSet>
      <EntityActions />
    </Form>
  );
};
