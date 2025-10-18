import type { FC } from "react";
import { Link } from "../Link/Link";

export const SideBar: FC = () => {
  return (
    <nav>
      <Link to="/products">Products</Link>
    </nav>
  );
};