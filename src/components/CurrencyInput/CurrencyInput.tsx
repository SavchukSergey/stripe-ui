import type { FC } from "react";
import { TextInput } from "../TextInput/TextInput";

export interface CurrencyInputProps {
    readonly id?: string;
    readonly value: string;
    onChange(value: string): void;
}

export const CurrencyInput: FC<CurrencyInputProps> = props => {

  return (
    <TextInput id={props.id} value={props.value} onChange={props.onChange} />
  );
};