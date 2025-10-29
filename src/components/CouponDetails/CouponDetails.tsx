import type { FC } from "react";
import type Stripe from "stripe";
import { useProductsList } from "../../hooks/useProductsList";
import { useHtmlId } from "../../utils/useHtmlId";
import { CheckboxField } from "../CheckboxField/CheckboxField";
import { CouponSpan } from "../CouponSpan/CouponSpan";
import { DateField } from "../DateField/DateField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { NumberField } from "../NumberField/NumberField";
import { ProductsList } from "../ProductsList/ProductsList";
import { RemoveButton } from "../RemoveButton/RemoveButton";
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

  const productsResponse = useProductsList();
  const allProducts = productsResponse?.data || [];

  const applicableProductIds = coupon.applies_to?.products;
  const applicableProducts = applicableProductIds
    ? allProducts.filter((product: Stripe.Product) => applicableProductIds.includes(product.id))
    : allProducts;

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
          onChange={() => { }}
          readOnly
          layout="horizontal"
        />

        <NumberField
          label="Max Redemptions"
          value={coupon.max_redemptions || 0}
          onChange={() => { }}
          readOnly
          layout="horizontal"
        />

        {coupon.redeem_by && (
          <DateField
            label="Expires"
            value={coupon.redeem_by}
            readOnly
            layout="horizontal"
          />
        )}

        <CheckboxField label="Valid" layout="horizontal" value={coupon.valid} />

        <DateField
          label="Created"
          value={coupon.created}
          readOnly
          layout="horizontal"
        />
      </FieldSet>

      {applicableProducts.length > 0 && (
        <div className="coupon-details__products">
          <h3>
            {applicableProductIds
              ? "Applicable Products"
              : "Applicable Products (All)"}
          </h3>
          <ProductsList products={applicableProducts} />
        </div>
      )}

      {props.onRemove && <RemoveButton label="Remove coupon" onClick={props.onRemove} />}
    </section>
  );
};
