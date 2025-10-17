import type { FC } from "react";
import { TextInput } from "../TextInput/TextInput";

export interface LookupKeyInputProps {
    readonly id?: string;
    readonly value: string;
    onChange(value: string): void;
}

export const LookupKeyInput: FC<LookupKeyInputProps> = props => {

  return (
    <TextInput id={props.id} value={props.value} onChange={props.onChange} />
  );
};