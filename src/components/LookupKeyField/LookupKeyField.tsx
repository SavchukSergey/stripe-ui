import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { LookupKeyInput } from "../LookupKeyInput/LookupKeyInput";

export interface LookupKeyFieldProps {
    readonly label?: string;
    readonly value: string;
    onChange(value: string): void;
}

export const LookupKeyField: FC<LookupKeyFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Lookup Key"} id={id}>
      <LookupKeyInput id={id} value={props.value} onChange={props.onChange} />
    </FormFieldLayout>
  );
};