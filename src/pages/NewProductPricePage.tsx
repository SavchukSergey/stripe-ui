import { useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Stripe from "stripe";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { PriceForm } from "../components/PriceForm/PriceForm";
import { usePriceCreate } from "../hooks/usePriceCreate";
import { getProductId } from "../utils/getProductId";

const EMPTY_PRICE_TEMPLATE: Stripe.Price = {
  id: "",
  object: "price",
  active: true,
  billing_scheme: "per_unit",
  created: 0,
  currency: "usd",
  custom_unit_amount: null,
  livemode: false,
  lookup_key: null,
  metadata: {},
  nickname: "",
  product: "",
  recurring: {
    interval: "month",
    interval_count: 1,
    meter: null,
    trial_period_days: null,
    usage_type: "licensed"
  },
  tax_behavior: "unspecified",
  tiers_mode: null,
  transform_quantity: null,
  type: "recurring",
  unit_amount: 0,
  unit_amount_decimal: "0"
};

export const NewProductPricePage: FC = () => {

  const productId = useParams()["productId"]!;

  const [price, setPrice] = useState<Stripe.Price>(EMPTY_PRICE_TEMPLATE);

  const createPrice = usePriceCreate();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await createPrice({
      ...price,
      product: productId
    }).then(res => {
      navigate(`/products/${getProductId(res.product)}/prices/${res.id}`);
    });
  };

  return (
    <CommonPage>
      <PriceForm
        mode="create"
        value={price} onChange={setPrice} onSubmit={handleSubmit} />
    </CommonPage>
  );
};