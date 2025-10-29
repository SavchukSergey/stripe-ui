import type { FC } from "react";

import "./TopBar.scss";

export const TopBar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light topbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Stripe UI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/subscriptions">
                Subscriptions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/customers">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
