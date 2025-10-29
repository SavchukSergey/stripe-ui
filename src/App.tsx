import { useMemo } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Stripe from "stripe";
import { StripeSettings } from "./components/StripeSettings/StripeSettings";
import { StripeContext } from "./context/StripeContext";
import { useStripeKey } from "./hooks/useStripeKey";
import { HomePage } from "./pages/HomePage";
import { NewProductPage } from "./pages/NewProductPage";
import { NewProductPricePage } from "./pages/NewProductPricePage";
import { PriceDetailsPage } from "./pages/PriceDetailsPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CustomersPage } from "./pages/CustomersPage";
import { CustomerDetailsPage } from "./pages/CustomerDetailsPage";
import { NewCustomerPage } from "./pages/NewCustomerPage";
import { SubscriptionsPage } from "./pages/SubscriptionsPage";
import { SubscriptionDetailsPage } from "./pages/SubscriptionDetailsPage";
import { NewSubscriptionPage } from "./pages/NewSubscriptionPage";
import { CouponsPage } from "./pages/CouponsPage";
import { CouponDetailsPage } from "./pages/CouponDetailsPage";
import { NewCouponPage } from "./pages/NewCouponPage";
import { EventsPage } from "./pages/EventsPage";
import { EventDetailsPage } from "./pages/EventDetailsPage";
import { InvoicesPage } from "./pages/InvoicesPage";
import { InvoiceDetailsPage } from "./pages/InvoiceDetailsPage";
import { PayoutsPage } from "./pages/PayoutsPage";
import { PayoutDetailsPage } from "./pages/PayoutDetailsPage";
import { PaymentIntentsPage } from "./pages/PaymentIntentsPage";
import { PaymentIntentDetailsPage } from "./pages/PaymentIntentDetailsPage";
import { NewPaymentIntentPage } from "./pages/NewPaymentIntentPage";
import { Layout } from "./components/Layout/Layout";

import "./App.scss";

function App() {

  const stripeKey = useStripeKey();
  const stripe = useMemo(() => stripeKey ? new Stripe(stripeKey) : null, [stripeKey]);

  return (
    <StripeContext.Provider value={stripe}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/products' Component={ProductsPage} />
            <Route path='/products/new' Component={NewProductPage} />
            <Route path='/products/:productId' Component={ProductDetailsPage} />
            <Route path='/products/:productId/prices/new' Component={NewProductPricePage} />
            <Route path='/products/:productId/prices/:priceId' Component={PriceDetailsPage} />
            <Route path='/customers' Component={CustomersPage} />
            <Route path='/customers/new' Component={NewCustomerPage} />
            <Route path='/customers/:customerId' Component={CustomerDetailsPage} />
            <Route path='/subscriptions' Component={SubscriptionsPage} />
            <Route path='/subscriptions/new' Component={NewSubscriptionPage} />
            <Route path='/subscriptions/:subscriptionId' Component={SubscriptionDetailsPage} />
            <Route path='/coupons' Component={CouponsPage} />
            <Route path='/coupons/new' Component={NewCouponPage} />
            <Route path='/coupons/:couponId' Component={CouponDetailsPage} />
            <Route path='/events' Component={EventsPage} />
            <Route path='/events/:eventId' Component={EventDetailsPage} />
            <Route path='/invoices' Component={InvoicesPage} />
            <Route path='/invoices/:invoiceId' Component={InvoiceDetailsPage} />
            <Route path='/payouts' Component={PayoutsPage} />
            <Route path='/payouts/:payoutId' Component={PayoutDetailsPage} />
            <Route path='/payment-intents' Component={PaymentIntentsPage} />
            <Route path='/payment-intents/new' Component={NewPaymentIntentPage} />
            <Route path='/payment-intents/:paymentIntentId' Component={PaymentIntentDetailsPage} />
          </Routes>
        </Layout>
      </HashRouter>
      <StripeSettings />
    </StripeContext.Provider>
  );
}

export default App;
