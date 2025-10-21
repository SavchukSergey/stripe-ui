import type { FC } from "react";
import { useProductsList } from "../../hooks/useProductsList";

export interface ProductInputProps {
  readonly id?: string;
  readonly value: string;
  onChange(value: string): void;
  readonly readOnly?: boolean;
}

export const ProductInput: FC<ProductInputProps> = props => {
  const products = useProductsList();

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
      <option value="">Select a product</option>
      {products?.data.map(product => (
        <option key={product.id} value={product.id}>
          {product.name}
        </option>
      ))}
    </select>
  );
};
