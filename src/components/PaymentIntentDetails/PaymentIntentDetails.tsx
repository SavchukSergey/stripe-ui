import type { FC } from "react";
import type Stripe from "stripe";
import { useHtmlId } from "../../utils/useHtmlId";
import { CustomerSelectField } from "../CustomerSelectField/CustomerSelectField";
import { DateField } from "../DateField/DateField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { PriceField } from "../PriceField/PriceField";
import { RemoveButton } from "../RemoveButton/RemoveButton";
import { PaymentIntentStatusSpan } from "../PaymentIntentStatusSpan/PaymentIntentStatusSpan";
import { TextField } from "../TextField/TextField";

export interface PaymentIntentDetailsProps {
  readonly paymentIntent: Stripe.PaymentIntent;
  readonly onCancel?: () => void;
}

export const PaymentIntentDetails: FC<PaymentIntentDetailsProps> = props => {
  const { paymentIntent } = props;
  const statusId = useHtmlId();
  const paymentMethodTypesId = useHtmlId();

  return (
    <section>
      <h2>Payment Intent {paymentIntent.id}</h2>

      <FieldSet>
        {paymentIntent.customer && (
          <CustomerSelectField
            label="Customer"
            value={paymentIntent.customer}
            readOnly
            layout="horizontal"
          />
        )}

        <FormFieldLayout label="Status" id={statusId} layout="horizontal">
          <div className="form-control-plaintext">
            <PaymentIntentStatusSpan status={paymentIntent.status} />
          </div>
        </FormFieldLayout>

        <PriceField
          label="Amount"
          price={{ unit_amount: paymentIntent.amount, currency: paymentIntent.currency }}
          layout="horizontal"
          readOnly
        />

        <TextField
          label="Description"
          value={paymentIntent.description || "-"}
          readOnly
          layout="horizontal"
        />

        <FormFieldLayout label="Payment Method Types" id={paymentMethodTypesId} layout="horizontal">
          <div className="form-control-plaintext">
            {paymentIntent.payment_method_types.join(", ")}
          </div>
        </FormFieldLayout>

        <DateField
          label="Created"
          value={paymentIntent.created}
          readOnly
          layout="horizontal"
        />
      </FieldSet>

      {props.onCancel && paymentIntent.status !== "canceled" && paymentIntent.status !== "succeeded" && (
        <RemoveButton label="Cancel payment intent" onClick={props.onCancel} />
      )}
    </section>
  );
};
