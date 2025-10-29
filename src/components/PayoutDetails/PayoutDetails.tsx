import type { FC } from "react";
import type Stripe from "stripe";
import { TextField } from "../TextField/TextField";
import { CheckboxField } from "../CheckboxField/CheckboxField";
import { DateField } from "../DateField/DateField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { PayoutStatusSpan } from "../PayoutStatusSpan/PayoutStatusSpan";
import { PriceField } from "../PriceField/PriceField";
import { useHtmlId } from "../../utils/useHtmlId";

export interface PayoutDetailsProps {
  readonly payout: Stripe.Payout;
}

export const PayoutDetails: FC<PayoutDetailsProps> = props => {
  const { payout } = props;
  const statusId = useHtmlId();

  return (
    <section>
      <h2>Payout {payout.id}</h2>

      <FieldSet>
        <TextField
          label="Payout ID"
          value={payout.id}
          readOnly
          layout="horizontal"
        />

        <FormFieldLayout label="Status" id={statusId} layout="horizontal">
          <div className="form-control-plaintext">
            <PayoutStatusSpan status={payout.status} />
          </div>
        </FormFieldLayout>

        <PriceField
          label="Amount"
          price={{ unit_amount: payout.amount, currency: payout.currency }}
          readOnly
          layout="horizontal"
        />

        <TextField
          label="Method"
          value={payout.method || "standard"}
          readOnly
          layout="horizontal"
        />

        <TextField
          label="Type"
          value={payout.type}
          readOnly
          layout="horizontal"
        />

        <DateField
          label="Created"
          value={payout.created}
          readOnly
          layout="horizontal"
        />

        {payout.arrival_date && (
          <DateField
            label="Arrival Date"
            value={payout.arrival_date}
            readOnly
            layout="horizontal"
          />
        )}

        <CheckboxField
          label="Automatic"
          value={payout.automatic}
          readOnly
          layout="horizontal"
        />

        {payout.description && (
          <TextField
            label="Description"
            value={payout.description}
            readOnly
            layout="horizontal"
          />
        )}

        {payout.statement_descriptor && (
          <TextField
            label="Statement Descriptor"
            value={payout.statement_descriptor}
            readOnly
            layout="horizontal"
          />
        )}

        {payout.failure_message && (
          <TextField
            label="Failure Message"
            value={payout.failure_message}
            readOnly
            layout="horizontal"
          />
        )}
      </FieldSet>
    </section>
  );
};
