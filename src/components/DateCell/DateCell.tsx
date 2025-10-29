import type { FC } from "react";
import { DateSpan } from "../DateSpan/DateSpan";

import "./DateCell.scss";

export interface DateCellProps {
  readonly value: number | null | undefined;
}

export const DateCell: FC<DateCellProps> = props => {
  const { value } = props;

  return (
    <td className="date-cell">
      {value ? <DateSpan value={value} /> : "-"}
    </td>
  );
};
