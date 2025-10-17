import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { PriceInput } from "../PriceInput/PriceInput";

export interface PriceFieldProps {
    readonly label?: string;
    readonly value: number;
    onChange(value: number): void;
}

export const PriceField: FC<PriceFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Price"} id={id}>
      <PriceInput id={id} value={props.value} onChange={props.onChange} />
    </FormFieldLayout>
  );
};