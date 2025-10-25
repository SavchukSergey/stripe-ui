import type { FC } from "react";
import type Stripe from "stripe";
import { RemoveButton } from "../RemoveButton/RemoveButton";
import { NumberField } from "../NumberField/NumberField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { CouponSpan } from "../CouponSpan/CouponSpan";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import "./CouponDetails.scss";

export interface CouponDetailsProps {
  readonly coupon: Stripe.Coupon;
  readonly onRemove?: () => void;
}

export const CouponDetails: FC<CouponDetailsProps> = props => {
  const { coupon } = props;
  const idFieldId = useHtmlId();
  const nameId = useHtmlId();
  const discountId = useHtmlId();
  const durationId = useHtmlId();
  const expiresId = useHtmlId();
  const validId = useHtmlId();
  const createdId = useHtmlId();

  const formatDuration = () => {
    if (coupon.duration === "forever") {
      return "Forever";
    }
    if (coupon.duration === "once") {
      return "Once";
    }
    if (coupon.duration === "repeating") {
      return `${coupon.duration_in_months || 0} months`;
    }
    return "-";
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <section className="coupon-details">
      <h2>{coupon.name || coupon.id}</h2>

      <FieldSet>
        <FormFieldLayout label="Coupon ID" id={idFieldId} layout="horizontal">
          <div className="form-control-plaintext">{coupon.id}</div>
        </FormFieldLayout>

        <FormFieldLayout label="Name" id={nameId} layout="horizontal">
          <div className="form-control-plaintext">{coupon.name || "-"}</div>
        </FormFieldLayout>

        <FormFieldLayout label="Discount" id={discountId} layout="horizontal">
          <div className="form-control-plaintext">
            <CouponSpan coupon={coupon} />
          </div>
        </FormFieldLayout>

        <FormFieldLayout label="Duration" id={durationId} layout="horizontal">
          <div className="form-control-plaintext">{formatDuration()}</div>
        </FormFieldLayout>

        <NumberField
          label="Times Redeemed"
          value={coupon.times_redeemed || 0}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        <NumberField
          label="Max Redemptions"
          value={coupon.max_redemptions || 0}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        {coupon.redeem_by && (
          <FormFieldLayout label="Expires" id={expiresId} layout="horizontal">
            <div className="form-control-plaintext">{formatDate(coupon.redeem_by)}</div>
          </FormFieldLayout>
        )}

        <FormFieldLayout label="Valid" id={validId} layout="horizontal">
          <div className="form-control-plaintext">{coupon.valid ? "Yes" : "No"}</div>
        </FormFieldLayout>

        <FormFieldLayout label="Created" id={createdId} layout="horizontal">
          <div className="form-control-plaintext">{formatDate(coupon.created)}</div>
        </FormFieldLayout>
      </FieldSet>

      {props.onRemove && <RemoveButton label="Remove coupon" onClick={props.onRemove} />}
    </section>
  );
};
