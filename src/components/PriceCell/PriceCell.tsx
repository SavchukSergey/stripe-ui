import type { FC } from "react";
import { PriceSpan } from "../PriceSpan/PriceSpan";

import "./PriceCell.scss";

export interface PriceCellProps {
  readonly unit_amount: number | null;
  readonly currency: string;
}

export const PriceCell: FC<PriceCellProps> = props => {
  const { unit_amount, currency } = props;

  return (
    <td className="price-cell">
      <PriceSpan price={{ unit_amount, currency }} />
    </td>
  );
};
