import { type FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Stripe from "stripe";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { CouponForm } from "../components/CouponForm/CouponForm";
import { useCouponCreate } from "../hooks/useCouponCreate";

const EMPTY_COUPON: Stripe.Coupon = {
  id: "",
  object: "coupon",
  created: 0,
  duration: "forever",
  livemode: false,
  metadata: {},
  name: null,
  amount_off: null,
  currency: null,
  duration_in_months: null,
  max_redemptions: null,
  percent_off: 10,
  redeem_by: null,
  times_redeemed: 0,
  valid: true
};

export const NewCouponPage: FC = () => {
  const [coupon, setCoupon] = useState<Stripe.Coupon>(EMPTY_COUPON);
  const createCoupon = useCouponCreate();
  const navigate = useNavigate();

  const handleSubmit = (value: Stripe.Coupon) => {
    createCoupon(value).then(created => {
      navigate(`/coupons/${created.id}`);
    });
  };

  return (
    <CommonPage>
      <h1>New Coupon</h1>
      <CouponForm value={coupon} onChange={setCoupon} onSubmit={handleSubmit} />
    </CommonPage>
  );
};
