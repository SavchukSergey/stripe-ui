import type { FC, PropsWithChildren } from "react";
import { SideBar } from "../SideBar/SideBar";
import { TopBar } from "../TopBar/TopBar";

import "./Layout.scss";

export const Layout: FC<PropsWithChildren> = props => {
  return (
    <div className="layout">
      <div className="layout__topbar">
        <TopBar />
      </div>
      <div className="layout__main">
        <div className="layout__sidebar">
          <SideBar />
        </div>
        <div className="layout__content">
          {props.children}
        </div>
      </div>
    </div>
  );
};