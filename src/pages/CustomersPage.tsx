import { type FC } from "react";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { Link } from "../components/Link/Link";
import { CustomersListContainer } from "../components/CustomersList/CustomersListContainer";

export const CustomersPage: FC = () => {

  return (
    <CommonPage>
      <h1>Customers</h1>
      <CustomersListContainer />
      <Link to="/customers/new">Create customer</Link>
    </CommonPage>
  );
};
