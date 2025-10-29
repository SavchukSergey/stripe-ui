import type { FC } from "react";
import type Stripe from "stripe";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";
import { PriceSpan } from "../PriceSpan/PriceSpan";
import { PriceAmountField } from "../PriceAmountField/PriceAmountField";
import { CurrencyField } from "../CurrencyField/CurrencyField";

export interface PriceFieldProps {
  readonly label: string;
  readonly price: Pick<Stripe.Price, "unit_amount" | "currency">;
  readonly layout?: FormFieldLayoutType;
  readonly readOnly?: boolean;
  readonly onChange?: (newValue: Pick<Stripe.Price, "unit_amount" | "currency">) => void;
}

export const PriceField: FC<PriceFieldProps> = props => {
  const { price, readOnly, onChange } = props;
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label} id={id} layout={props.layout}>
      {readOnly ?
        <div className="form-control-plaintext">
          <PriceSpan price={props.price} />
        </div> : <>
          <PriceAmountField value={price.unit_amount || 0} onChange={onChange ? newVal => onChange({ ...price, unit_amount: newVal }) : undefined} readOnly={readOnly} layout="horizontal" />
          <CurrencyField value={price.currency || ""} onChange={onChange ? newVal => onChange({ ...price, currency: newVal }) : undefined} readOnly={readOnly} layout="horizontal" />
        </>
      }
    </FormFieldLayout>
  );
};
