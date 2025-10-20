import { type FC } from "react";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { Link } from "../components/Link/Link";
import { ProductsListContainer } from "../components/ProductsList/ProductsListContainer";

export const ProductsPage: FC = () => {

  return (
    <CommonPage>
      <h1>Products</h1>
      <ProductsListContainer />
      <Link to="/products/new">Create product</Link>
    </CommonPage>
  );
};