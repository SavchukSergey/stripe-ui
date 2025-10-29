import { type FC } from "react";
import { CommonPage } from "../components/CommonPage/CommonPage";
import "./HomePage.scss";

export const HomePage: FC = () => {
  return (
    <CommonPage className="home-page">
      <div className="home-page__panel">
        <h1>Stripe UI Management</h1>
        <p>
          A comprehensive React-based interface for managing your Stripe resources.
        </p>
        <div className="home-page__features">
          <h2>Features</h2>
          <ul>
            <li>Manage Products and Prices</li>
            <li>Handle Customer Records</li>
            <li>Track Subscriptions</li>
            <li>Monitor Coupons and Promotions</li>
            <li>View Events and Invoices</li>
            <li>Manage Payouts</li>
          </ul>
        </div>
        <p className="home-page__note">
          To get started, configure your Stripe API key using the settings button in the top bar.
        </p>

        <div className="alert alert-success" role="alert">
          Your Stripe API key is stored only in your device's local storage and is used exclusively to communicate with Stripe's API. It is safe to enter your key here.
        </div>

      </div>
    </CommonPage>
  );
};
