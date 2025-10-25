import { type FC } from "react";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { Link } from "../components/Link/Link";
import { CouponsListContainer } from "../components/CouponsList/CouponsListContainer";

export const CouponsPage: FC = () => {
  return (
    <CommonPage>
      <h1>Coupons</h1>
      <CouponsListContainer />
      <Link to="/coupons/new">Create coupon</Link>
    </CommonPage>
  );
};
