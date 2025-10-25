import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import { useCouponDelete } from "../../hooks/useCouponDelete";
import { useCouponDetails } from "../../hooks/useCouponDetails";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { CouponDetails } from "./CouponDetails";

export interface CouponDetailsContainerProps {
  readonly couponId: string;
}

export const CouponDetailsContainer: FC<CouponDetailsContainerProps> = props => {
  const couponId = props.couponId;
  const coupon = useCouponDetails(couponId);
  const deleteCoupon = useCouponDelete();
  const navigate = useNavigate();

  const handleRemove = () => {
    if (coupon && !("deleted" in coupon)) {
      deleteCoupon(coupon).then(() => {
        navigate("/coupons");
      });
    }
  };

  if (coupon && !("deleted" in coupon)) {
    return (
      <CouponDetails
        coupon={coupon}
        onRemove={handleRemove}
      />
    );
  }

  return (
    <LoadingPanel />
  );
};
