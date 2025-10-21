import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { PriceSelectInput } from "../PriceSelectInput/PriceSelectInput";

export interface PriceSelectFieldProps {
  readonly label?: string;
  readonly productId: string;
  readonly value: string;
  onChange(value: string): void;
  readonly readOnly?: boolean;
  readonly layout?: "vertical" | "horizontal";
}

export const PriceSelectField: FC<PriceSelectFieldProps> = props => {
  const htmlId = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Price"} id={htmlId} layout={props.layout}>
      <PriceSelectInput
        id={htmlId}
        productId={props.productId}
        value={props.value}
        onChange={props.onChange}
        readOnly={props.readOnly}
      />
    </FormFieldLayout>
  );
};
