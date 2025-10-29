import type { FC } from "react";

import { Link } from "../Link/Link";
import "./TopBar.scss";

export const TopBar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light topbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Stripe UI
        </Link>
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
              <Link className="nav-link" to="/subscriptions">
                Subscriptions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customers">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/payment-intents">
                Payment Intents
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
