import { type FC } from "react";
import { useCouponsList } from "../../hooks/useCouponsList";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { CouponsList } from "./CouponsList";

export const CouponsListContainer: FC = () => {
  const coupons = useCouponsList();

  if (coupons) {
    return (
      <CouponsList coupons={coupons.data} />
    );
  }

  return <LoadingPanel />;
};
