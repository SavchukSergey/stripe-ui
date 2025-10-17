import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { CurrencyInput } from "../CurrencyInput/CurrencyInput";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";

export interface CurrencyFieldProps {
    readonly label?: string;
    readonly value: string;
    onChange(value: string): void;
}

export const CurrencyField: FC<CurrencyFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Currency"} id={id}>
      <CurrencyInput id={id} value={props.value} onChange={props.onChange} />
    </FormFieldLayout>
  );
};