import type { FC } from "react";

export interface TextInputProps {
  readonly id?: string;
  readonly value: string;
  onChange?(value: string): void;
  readonly readOnly?: boolean;
}

export const TextInput: FC<TextInputProps> = props => {
  return (
    <input
      id={props.id}
      className="form-control"
      type="text" value={props.value}
      onChange={(ev => props.onChange ? props.onChange(ev.target.value) : undefined)}
      readOnly={props.readOnly}
    />
  );
};