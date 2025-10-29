import type { FC } from "react";
import type Stripe from "stripe";
import { TextField } from "../TextField/TextField";
import { CheckboxField } from "../CheckboxField/CheckboxField";
import { DateField } from "../DateField/DateField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { CustomerSelectField } from "../CustomerSelectField/CustomerSelectField";
import { InvoiceStatusSpan } from "../InvoiceStatusSpan/InvoiceStatusSpan";
import { PriceField } from "../PriceField/PriceField";
import { PriceCell } from "../PriceCell/PriceCell";
import { Table } from "../Table/Table";
import { useHtmlId } from "../../utils/useHtmlId";

export interface InvoiceDetailsProps {
  readonly invoice: Stripe.Invoice;
}

export const InvoiceDetails: FC<InvoiceDetailsProps> = props => {
  const { invoice } = props;
  const statusId = useHtmlId();

  return (
    <section>
      <h2>Invoice {invoice.number || invoice.id}</h2>

      <FieldSet>
        <TextField
          label="Invoice ID"
          value={invoice.id}
          readOnly
          layout="horizontal"
        />

        {invoice.number && (
          <TextField
            label="Invoice Number"
            value={invoice.number}
            readOnly
            layout="horizontal"
          />
        )}

        <CustomerSelectField
          label="Customer"
          value={invoice.customer}
          readOnly
          layout="horizontal"
        />

        <FormFieldLayout label="Status" id={statusId} layout="horizontal">
          <div className="form-control-plaintext">
            <InvoiceStatusSpan status={invoice.status} />
          </div>
        </FormFieldLayout>

        <PriceField
          label="Amount Due"
          price={{ unit_amount: invoice.amount_due, currency: invoice.currency }}
          layout="horizontal"
          readOnly
        />

        <PriceField
          label="Amount Paid"
          price={{ unit_amount: invoice.amount_paid, currency: invoice.currency }}
          layout="horizontal"
          readOnly
        />

        <PriceField
          label="Amount Remaining"
          price={{ unit_amount: invoice.amount_remaining, currency: invoice.currency }}
          layout="horizontal"
          readOnly
        />

        <DateField
          label="Created"
          value={invoice.created}
          readOnly
          layout="horizontal"
        />

        {invoice.due_date && (
          <DateField
            label="Due Date"
            value={invoice.due_date}
            readOnly
            layout="horizontal"
          />
        )}

        <CheckboxField
          label="Paid"
          value={invoice.status === "paid"}
          readOnly
          layout="horizontal"
        />

        {invoice.description && (
          <TextField
            label="Description"
            value={invoice.description}
            readOnly
            layout="horizontal"
          />
        )}
      </FieldSet>

      <h3>Line Items</h3>
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Amount</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoice.lines.data.map(line => {
            const quantity = line.quantity || 1;
            const unitAmount = Math.round(line.amount / quantity);
            return (
              <tr key={line.id}>
                <td>{line.description || "-"}</td>
                <td>{quantity}</td>
                <PriceCell unit_amount={unitAmount} currency={invoice.currency} />
                <PriceCell unit_amount={line.amount} currency={invoice.currency} />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};
