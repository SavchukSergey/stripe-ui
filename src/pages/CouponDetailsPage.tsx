import { type FC } from "react";
import { useParams } from "react-router-dom";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { CouponDetailsContainer } from "../components/CouponDetails/CouponDetailsContainer";

export const CouponDetailsPage: FC = () => {
  const params = useParams<{ couponId: string }>();
  const couponId = params.couponId;

  if (!couponId) {
    return (
      <CommonPage>
        <h1>Coupon not found</h1>
      </CommonPage>
    );
  }

  return (
    <CommonPage>
      <h1>Coupon Details</h1>
      <CouponDetailsContainer couponId={couponId} />
    </CommonPage>
  );
};
