import type { FC } from "react";

export interface DateInputProps {
  readonly id?: string;
  readonly value: number;
  onChange?(value: number): void;
  readonly readOnly?: boolean;
}

export const DateInput: FC<DateInputProps> = props => {
  const timestampToDateString = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toISOString().split("T")[0];
  };

  const dateStringToTimestamp = (dateString: string): number => {
    return Math.floor(new Date(dateString).getTime() / 1000);
  };

  return (
    <input
      id={props.id}
      className="form-control"
      type="date"
      value={timestampToDateString(props.value)}
      onChange={ev => props.onChange ? props.onChange(dateStringToTimestamp(ev.target.value)) : () => { }}
      readOnly={props.readOnly}
    />
  );
};
