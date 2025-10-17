import type { FC } from "react";

export interface DateSpanProps {
  readonly value: number;
}

export const DateSpan: FC<DateSpanProps> = ({ value: timestamp }) => {
  const formatted = new Date(timestamp * 1000).toLocaleDateString();
  return <>{formatted}</>;
};
