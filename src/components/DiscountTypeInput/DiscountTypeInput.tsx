import type { FC } from "react";

export type DiscountType = "percentage" | "fixed";

export interface DiscountTypeInputProps {
  readonly id?: string;
  readonly value: DiscountType;
  onChange(value: DiscountType): void;
  readonly readOnly?: boolean;
}

export const DiscountTypeInput: FC<DiscountTypeInputProps> = props => {
  return (
    <select
      id={props.id}
      value={props.value}
      className="form-select"
      onChange={(ev => props.onChange(ev.target.value as DiscountType))}
      disabled={props.readOnly}
    >
      <option value="percentage">Percentage Off</option>
      <option value="fixed">Fixed Amount Off</option>
    </select>
  );
};
