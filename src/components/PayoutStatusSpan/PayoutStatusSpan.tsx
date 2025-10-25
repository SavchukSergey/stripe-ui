import type { FC } from "react";
import "./PayoutStatusSpan.scss";

export interface PayoutStatusSpanProps {
  readonly status: string;
}

export const PayoutStatusSpan: FC<PayoutStatusSpanProps> = props => {
  const formatStatus = (status: string) => {
    return status.replace(/_/g, " ");
  };

  return (
    <span className={`payout-status payout-status--${props.status}`}>
      {formatStatus(props.status)}
    </span>
  );
};
