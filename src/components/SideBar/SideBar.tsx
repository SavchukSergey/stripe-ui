import type { FC, PropsWithChildren } from "react";
import { Link } from "../Link/Link";

import "./SideBar.scss";

export const SideBar: FC = () => {
  return (
    <nav>
      <ul className="nav sidebar__nav">
        <SideBarItem to="/subscriptions">Subscriptions</SideBarItem>
        <SideBarItem to="/customers">Customers</SideBarItem>
        <SideBarItem to="/products">Products</SideBarItem>
        <SideBarItem to="/coupons">Coupons</SideBarItem>
      </ul>
    </nav>
  );
};

export interface SideBarItemProps {
  readonly to: string;
}

export const SideBarItem: FC<PropsWithChildren<SideBarItemProps>> = props => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.to}>{props.children}</Link>
    </li>
  );
};