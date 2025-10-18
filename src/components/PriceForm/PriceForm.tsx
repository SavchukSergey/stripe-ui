import type { FC } from "react";
import type Stripe from "stripe";
import { CheckboxField } from "../CheckboxField/CheckboxField";
import { CurrencyField } from "../CurrencyField/CurrencyField";
import { EntityActions } from "../EntityActions/EntityActions";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { Form } from "../Form/Form";
import { LookupKeyField } from "../LookupKeyField/LookupKeyField";
import { PriceField } from "../PriceField/PriceField";
import { RecurrencyField } from "../RecurrencyField/RecurrencyField";
import { TextField } from "../TextField/TextField";

export interface PriceFormProps {
  readonly mode: "create" | "update";
  readonly value: Stripe.Price;
  onChange(value: Stripe.Price): void;
  onSubmit(value: Stripe.Price): void;
}

export const PriceForm: FC<PriceFormProps> = props => {

  const { value, onChange } = props;

  const handleSubmit = () => {
    props.onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <TextField label="Name" value={value.nickname || ""} onChange={newVal => onChange({ ...value, nickname: newVal })} layout="horizontal" />
        <LookupKeyField value={value.lookup_key || ""} onChange={newVal => onChange({ ...value, lookup_key: newVal })} layout="horizontal" />
        <PriceField value={value.unit_amount || 0} onChange={newVal => onChange({ ...value, unit_amount: newVal })} readOnly={props.mode !== "create"} layout="horizontal" />
        <CurrencyField value={value.currency || ""} onChange={newVal => onChange({ ...value, currency: newVal })} readOnly={props.mode !== "create"} layout="horizontal" />

        <CheckboxField
          label="Enable recurrency"
          value={!!value.recurring}
          onChange={newValue => onChange({ ...value, recurring: newValue ? EMPTY_RECURRING_TEMPLATE : null })}
          readOnly={props.mode !== "create"} layout="horizontal" />
        {value.recurring &&
          <RecurrencyField value={value.recurring} onChange={newVal => onChange({ ...value, recurring: newVal })} readOnly={props.mode !== "create"} layout="horizontal" />
        }

        <CheckboxField label="Active" value={value.active} onChange={newVal => onChange({ ...value, active: newVal })} layout="horizontal" />
      </FieldSet>
      <EntityActions />
    </Form>
  );
};

const EMPTY_RECURRING_TEMPLATE: Stripe.Price.Recurring = {
  interval: "month",
  interval_count: 1,
  meter: null,
  trial_period_days: null,
  usage_type: "licensed"
};