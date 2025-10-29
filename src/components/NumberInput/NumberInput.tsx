import type { FC } from "react";

export interface NumberInputProps {
  readonly id?: string;
  readonly value: number;
  onChange?(value: number): void;
  readonly readOnly?: boolean;
}

export const NumberInput: FC<NumberInputProps> = props => {
  return (
    <input
      id={props.id}
      className="form-control"
      type="number" value={props.value}
      onChange={(ev => props.onChange && props.onChange(ev.target.valueAsNumber))}
      readOnly={props.readOnly}
    />
  );
};