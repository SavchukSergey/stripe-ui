import type { FC } from "react";
import type Stripe from "stripe";
import { TextField } from "../TextField/TextField";
import { CheckboxField } from "../CheckboxField/CheckboxField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { CustomerLink } from "../CustomerLink/CustomerLink";
import { InvoiceStatusSpan } from "../InvoiceStatusSpan/InvoiceStatusSpan";
import { PriceSpan } from "../PriceSpan/PriceSpan";
import { Table } from "../Table/Table";
import { useHtmlId } from "../../utils/useHtmlId";

export interface InvoiceDetailsProps {
  readonly invoice: Stripe.Invoice;
}

export const InvoiceDetails: FC<InvoiceDetailsProps> = props => {
  const { invoice } = props;
  const customerLabelId = useHtmlId();
  const statusId = useHtmlId();
  const amountDueId = useHtmlId();
  const amountPaidId = useHtmlId();
  const amountRemainingId = useHtmlId();
  const createdId = useHtmlId();
  const dueDateId = useHtmlId();

  const formatDate = (timestamp: number | null) => {
    if (!timestamp) return "N/A";
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <section>
      <h2>Invoice {invoice.number || invoice.id}</h2>

      <FieldSet>
        <TextField
          label="Invoice ID"
          value={invoice.id}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        {invoice.number && (
          <TextField
            label="Invoice Number"
            value={invoice.number}
            onChange={() => {}}
            readOnly={true}
            layout="horizontal"
          />
        )}

        <FormFieldLayout label="Customer" id={customerLabelId} layout="horizontal">
          <div className="form-control-plaintext">
            <CustomerLink customer={invoice.customer} />
          </div>
        </FormFieldLayout>

        <FormFieldLayout label="Status" id={statusId} layout="horizontal">
          <div className="form-control-plaintext">
            <InvoiceStatusSpan status={invoice.status} />
          </div>
        </FormFieldLayout>

        <FormFieldLayout label="Amount Due" id={amountDueId} layout="horizontal">
          <div className="form-control-plaintext">
            <PriceSpan price={{ unit_amount: invoice.amount_due, currency: invoice.currency }} />
          </div>
        </FormFieldLayout>

        <FormFieldLayout label="Amount Paid" id={amountPaidId} layout="horizontal">
          <div className="form-control-plaintext">
            <PriceSpan price={{ unit_amount: invoice.amount_paid, currency: invoice.currency }} />
          </div>
        </FormFieldLayout>

        <FormFieldLayout label="Amount Remaining" id={amountRemainingId} layout="horizontal">
          <div className="form-control-plaintext">
            <PriceSpan price={{ unit_amount: invoice.amount_remaining, currency: invoice.currency }} />
          </div>
        </FormFieldLayout>

        <FormFieldLayout label="Created" id={createdId} layout="horizontal">
          <div className="form-control-plaintext">{formatDate(invoice.created)}</div>
        </FormFieldLayout>

        {invoice.due_date && (
          <FormFieldLayout label="Due Date" id={dueDateId} layout="horizontal">
            <div className="form-control-plaintext">{formatDate(invoice.due_date)}</div>
          </FormFieldLayout>
        )}

        <CheckboxField
          label="Paid"
          value={invoice.status === "paid"}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        {invoice.description && (
          <TextField
            label="Description"
            value={invoice.description}
            onChange={() => {}}
            readOnly={true}
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
                <td>
                  <PriceSpan price={{ unit_amount: unitAmount, currency: invoice.currency }} />
                </td>
                <td>
                  <PriceSpan price={{ unit_amount: line.amount, currency: invoice.currency }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};
