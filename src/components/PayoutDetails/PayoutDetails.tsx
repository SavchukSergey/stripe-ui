import type { FC } from "react";
import type Stripe from "stripe";
import { TextField } from "../TextField/TextField";
import { CheckboxField } from "../CheckboxField/CheckboxField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { PayoutStatusSpan } from "../PayoutStatusSpan/PayoutStatusSpan";
import { PriceSpan } from "../PriceSpan/PriceSpan";
import { useHtmlId } from "../../utils/useHtmlId";

export interface PayoutDetailsProps {
  readonly payout: Stripe.Payout;
}

export const PayoutDetails: FC<PayoutDetailsProps> = props => {
  const { payout } = props;
  const statusId = useHtmlId();
  const amountId = useHtmlId();
  const createdId = useHtmlId();
  const arrivalDateId = useHtmlId();

  const formatDate = (timestamp: number | null) => {
    if (!timestamp) return "N/A";
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <section>
      <h2>Payout {payout.id}</h2>

      <FieldSet>
        <TextField
          label="Payout ID"
          value={payout.id}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        <FormFieldLayout label="Status" id={statusId} layout="horizontal">
          <div className="form-control-plaintext">
            <PayoutStatusSpan status={payout.status} />
          </div>
        </FormFieldLayout>

        <FormFieldLayout label="Amount" id={amountId} layout="horizontal">
          <div className="form-control-plaintext">
            <PriceSpan price={{ unit_amount: payout.amount, currency: payout.currency }} />
          </div>
        </FormFieldLayout>

        <TextField
          label="Method"
          value={payout.method || "standard"}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        <TextField
          label="Type"
          value={payout.type}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        <FormFieldLayout label="Created" id={createdId} layout="horizontal">
          <div className="form-control-plaintext">{formatDate(payout.created)}</div>
        </FormFieldLayout>

        {payout.arrival_date && (
          <FormFieldLayout label="Arrival Date" id={arrivalDateId} layout="horizontal">
            <div className="form-control-plaintext">{formatDate(payout.arrival_date)}</div>
          </FormFieldLayout>
        )}

        <CheckboxField
          label="Automatic"
          value={payout.automatic}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        {payout.description && (
          <TextField
            label="Description"
            value={payout.description}
            onChange={() => {}}
            readOnly={true}
            layout="horizontal"
          />
        )}

        {payout.statement_descriptor && (
          <TextField
            label="Statement Descriptor"
            value={payout.statement_descriptor}
            onChange={() => {}}
            readOnly={true}
            layout="horizontal"
          />
        )}

        {payout.failure_message && (
          <TextField
            label="Failure Message"
            value={payout.failure_message}
            onChange={() => {}}
            readOnly={true}
            layout="horizontal"
          />
        )}
      </FieldSet>
    </section>
  );
};
