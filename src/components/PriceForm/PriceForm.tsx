import type { FC } from "react";
import type Stripe from "stripe";
import { CurrencyField } from "../CurrencyField/CurrencyField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { LookupKeyField } from "../LookupKeyField/LookupKeyField";
import { PriceField } from "../PriceField/PriceField";

export interface PriceFormProps {
    readonly value: Stripe.Price;
    onChange(value: Stripe.Price): void;
}

export const PriceForm: FC<PriceFormProps> = props => {

  const { value, onChange } = props;

  return (
    <form>
      <FieldSet>
        <LookupKeyField value={value.lookup_key || ""} onChange={newVal => onChange({ ...value, lookup_key: newVal })} />
        <PriceField value={value.unit_amount || 0} onChange={newVal => onChange({ ...value, unit_amount: newVal })} />
        <CurrencyField value={value.currency || ""} onChange={newVal => onChange({ ...value, currency: newVal })} />
      </FieldSet>
    </form>
  );
};