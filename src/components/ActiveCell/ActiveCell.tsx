import type { FC } from "react";

import "./ActiveCell.scss";

export interface ActiveCellProps {
  readonly value: boolean;
}

export const ActiveCell: FC<ActiveCellProps> = props => {
  return (
    <td className="active-cell">{props.value ? "✅" : "❌"}</td>
  );
};