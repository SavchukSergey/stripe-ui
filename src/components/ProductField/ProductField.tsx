import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { ProductInput } from "../ProductInput/ProductInput";

export interface ProductFieldProps {
  readonly label?: string;
  readonly value: string;
  onChange(value: string): void;
  readonly readOnly?: boolean;
  readonly layout?: "vertical" | "horizontal";
}

export const ProductField: FC<ProductFieldProps> = props => {
  const htmlId = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Product"} id={htmlId} layout={props.layout}>
      <ProductInput id={htmlId} value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
    </FormFieldLayout>
  );
};
