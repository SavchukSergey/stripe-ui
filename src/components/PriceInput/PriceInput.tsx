import type { FC } from "react";
import { NumberInput } from "../NumberInput/NumberInput";

export interface PriceInputProps {
  readonly id?: string;
  readonly value: number;
  onChange?(value: number): void;
  readonly readOnly?: boolean;
}

export const PriceInput: FC<PriceInputProps> = props => {

  return (
    <NumberInput
      id={props.id}
      value={props.value / 100}
      onChange={newVal => props.onChange && props.onChange(Math.round(newVal * 100))}
      readOnly={props.readOnly}
    />
  );
};
