import type { FC } from "react";

export interface EmailInputProps {
  readonly id?: string;
  readonly value: string;
  onChange?(value: string): void;
  readonly readOnly?: boolean;
}

export const EmailInput: FC<EmailInputProps> = props => {
  return (
    <input
      id={props.id}
      className="form-control"
      type="email" value={props.value}
      onChange={(ev => props.onChange ? props.onChange(ev.target.value) : undefined)}
      readOnly={props.readOnly}
    />
  );
};