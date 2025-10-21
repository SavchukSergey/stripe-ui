import type { FC } from "react";
import { usePricesList } from "../../hooks/usePricesList";

export interface PriceSelectInputProps {
  readonly id?: string;
  readonly productId: string;
  readonly value: string;
  onChange(value: string): void;
  readonly readOnly?: boolean;
}

export const PriceSelectInput: FC<PriceSelectInputProps> = props => {
  const prices = usePricesList(props.productId);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <select
      id={props.id}
      value={props.value}
      onChange={handleChange}
      disabled={props.readOnly}
      className="form-control"
    >
      <option value="">Select a price</option>
      {prices?.data.map(price => (
        <option key={price.id} value={price.id}>
          {price.nickname || price.id} - {(price.unit_amount || 0) / 100} {price.currency.toUpperCase()}
          {price.recurring && ` / ${price.recurring.interval}`}
        </option>
      ))}
    </select>
  );
};
