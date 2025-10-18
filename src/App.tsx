import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Stripe from "stripe";
import { StripeSettings } from "./components/StripeSettings/StripeSettings";
import { StripeContext } from "./context/StripeContext";
import { useStripeKey } from "./hooks/useStripeKey";
import { NewProductPage } from "./pages/NewProductPage";
import { NewProductPricePage } from "./pages/NewProductPricePage";
import { PriceDetailsPage } from "./pages/PriceDetailsPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { ProductsPage } from "./pages/ProductsPage";
import { Layout } from "./components/Layout/Layout";

import "./App.scss";

function App() {

  const stripeKey = useStripeKey();
  const stripe = useMemo(() => stripeKey ? new Stripe(stripeKey) : null, [stripeKey]);

  return (
    <StripeContext.Provider value={stripe}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Navigate to="/products" />} />
            <Route path='/products' Component={ProductsPage} />
            <Route path='/products/new' Component={NewProductPage} />
            <Route path='/products/:productId' Component={ProductDetailsPage} />
            <Route path='/products/:productId/prices/new' Component={NewProductPricePage} />
            <Route path='/products/:productId/prices/:priceId' Component={PriceDetailsPage} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <StripeSettings />
    </StripeContext.Provider>
  );
}

export default App;
