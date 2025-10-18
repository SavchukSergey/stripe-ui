import type { FC } from "react";

export interface CheckboxInputProps {
  readonly id?: string;
  readonly value: boolean;
  onChange(value: boolean): void;
  readonly readOnly?: boolean;
}

export const CheckboxInput: FC<CheckboxInputProps> = props => {
  return (
    <input
      id={props.id}
      type="checkbox" checked={props.value}
      onChange={(ev => props.onChange(ev.target.checked))}
      readOnly={props.readOnly}
      disabled={props.readOnly}
    />
  );
};