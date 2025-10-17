import { createContext } from "react";
import Stripe from "stripe";

export const StripeContext = createContext<Stripe | null>(null);
