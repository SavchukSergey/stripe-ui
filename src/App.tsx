import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stripe from "stripe";
import { ProductsListContainer } from "./components/ProductsList/ProductsListContainer";
import { StripeSettings } from "./components/StripeSettings/StripeSettings";
import { StripeContext } from "./context/StripeContext";
import { useStripeKey } from "./hooks/useStripeKey";
import { PriceDetailsPage } from "./pages/PriceDetailsPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

function App() {

  const stripeKey = useStripeKey();
  const stripe = useMemo(() => stripeKey ? new Stripe(stripeKey) : null, [stripeKey]);

  return (
    <StripeContext.Provider value={stripe}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={ProductsListContainer} />
          <Route path='/products/:productId' Component={ProductDetailsPage} />
          <Route path='/products/:productId/prices/:priceId' Component={PriceDetailsPage} />
        </Routes>
      </BrowserRouter>
      <StripeSettings />
    </StripeContext.Provider>
  );
}

export default App;
