import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import type Stripe from "stripe";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { ProductForm } from "../components/ProductForm/ProductForm";
import { useProductCreate } from "../hooks/useProductCreate";

const EMPTY_PRODUCT_TEMPLATE: Stripe.Product = {
  id: "",
  object: "product",
  type: "service",
  active: true,
  created: 0,
  default_price: null,
  description: null,
  images: [],
  marketing_features: [],
  livemode: false,
  metadata: {},
  name: "",
  package_dimensions: null,
  shippable: null,
  statement_descriptor: null,
  tax_code: null,
  unit_label: null,
  updated: 0,
  url: null
};

export const NewProductPage: FC = () => {

  const [product, setProduct] = useState<Stripe.Product>(EMPTY_PRODUCT_TEMPLATE);

  const createProduct = useProductCreate();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await createProduct(product).then(res => {
      navigate(`/products/${res.id}`);
    });
  };

  return (
    <CommonPage>
      <ProductForm value={product} onChange={setProduct} onSubmit={handleSubmit} />
    </CommonPage>
  );
};