import type { FC } from "react";

export interface TextInputProps {
    readonly id?: string;
    readonly value: string;
    onChange(value: string): void;
}

export const TextInput: FC<TextInputProps> = props => {
  return (
    <input
      id={props.id}
      type="text" value={props.value}
      onChange={(ev => props.onChange(ev.target.value))}
    />
  );
};