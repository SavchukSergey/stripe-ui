import { type FC, useState } from "react";
import type Stripe from "stripe";
import { CheckboxField } from "../CheckboxField/CheckboxField";
import { CurrencyField } from "../CurrencyField/CurrencyField";
import { EntityActions } from "../EntityActions/EntityActions";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { Form } from "../Form/Form";
import { NumberField } from "../NumberField/NumberField";
import { TextField } from "../TextField/TextField";
import { DiscountTypeInput, type DiscountType } from "../DiscountTypeInput/DiscountTypeInput";
import { DurationInput } from "../DurationInput/DurationInput";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";

export interface CouponFormProps {
  readonly value: Stripe.Coupon;
  onChange(value: Stripe.Coupon): void;
  onSubmit(value: Stripe.Coupon): void;
}

export const CouponForm: FC<CouponFormProps> = props => {
  const { value, onChange } = props;
  const discountTypeId = useHtmlId();
  const durationId = useHtmlId();

  const discountType: DiscountType = value.percent_off !== null && value.percent_off !== undefined
    ? "percentage"
    : "fixed";

  const handleDiscountTypeChange = (newType: DiscountType) => {
    if (newType === "percentage") {
      onChange({ ...value, percent_off: 0, amount_off: null });
    } else {
      onChange({ ...value, percent_off: null, amount_off: 0, currency: value.currency || "usd" });
    }
  };

  const [useMaxRedemptions, setUseMaxRedemptions] = useState(
    value.max_redemptions !== null && value.max_redemptions !== undefined
  );

  const [useRedeemBy, setUseRedeemBy] = useState(
    value.redeem_by !== null && value.redeem_by !== undefined
  );

  const handleSubmit = () => {
    props.onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <TextField
          label="Coupon ID"
          value={value.id || ""}
          onChange={newVal => onChange({ ...value, id: newVal })}
          layout="horizontal"
        />
        <TextField
          label="Name (Optional)"
          value={value.name || ""}
          onChange={newVal => onChange({ ...value, name: newVal })}
          layout="horizontal"
        />

        <FormFieldLayout label="Discount Type" id={discountTypeId} layout="horizontal">
          <DiscountTypeInput
            id={discountTypeId}
            value={discountType}
            onChange={handleDiscountTypeChange}
          />
        </FormFieldLayout>

        {discountType === "percentage" ? (
          <NumberField
            label="Percent Off"
            value={value.percent_off || 0}
            onChange={newVal => onChange({ ...value, percent_off: newVal })}
            layout="horizontal"
          />
        ) : (
          <>
            <NumberField
              label="Amount Off (cents)"
              value={value.amount_off || 0}
              onChange={newVal => onChange({ ...value, amount_off: newVal })}
              layout="horizontal"
            />
            <CurrencyField
              label="Currency"
              value={value.currency || "usd"}
              onChange={newVal => onChange({ ...value, currency: newVal })}
              layout="horizontal"
            />
          </>
        )}

        <FormFieldLayout label="Duration" id={durationId} layout="horizontal">
          <DurationInput
            id={durationId}
            value={value.duration}
            onChange={newVal => onChange({ ...value, duration: newVal })}
          />
        </FormFieldLayout>

        {value.duration === "repeating" && (
          <NumberField
            label="Duration in Months"
            value={value.duration_in_months || 0}
            onChange={newVal => onChange({ ...value, duration_in_months: newVal })}
            layout="horizontal"
          />
        )}

        <CheckboxField
          label="Set Max Redemptions"
          value={useMaxRedemptions}
          onChange={newValue => {
            setUseMaxRedemptions(newValue);
            if (!newValue) {
              onChange({ ...value, max_redemptions: null });
            } else {
              onChange({ ...value, max_redemptions: 1 });
            }
          }}
          layout="horizontal"
        />

        {useMaxRedemptions && (
          <NumberField
            label="Max Redemptions"
            value={value.max_redemptions || 0}
            onChange={newVal => onChange({ ...value, max_redemptions: newVal })}
            layout="horizontal"
          />
        )}

        <CheckboxField
          label="Set Expiration Date"
          value={useRedeemBy}
          onChange={newValue => {
            setUseRedeemBy(newValue);
            if (!newValue) {
              onChange({ ...value, redeem_by: null });
            } else {
              onChange({ ...value, redeem_by: Math.floor(Date.now() / 1000) });
            }
          }}
          layout="horizontal"
        />

        {useRedeemBy && (
          <NumberField
            label="Redeem By (Unix timestamp)"
            value={value.redeem_by || 0}
            onChange={newVal => onChange({ ...value, redeem_by: newVal })}
            layout="horizontal"
          />
        )}
      </FieldSet>
      <EntityActions />
    </Form>
  );
};
