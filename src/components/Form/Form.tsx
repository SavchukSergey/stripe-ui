import { type FC, type FormEvent, type PropsWithChildren, useCallback } from "react";

import "./Form.scss";

export interface FormProps {
  readonly id?: string;
  readonly className?: string;
  onSubmit(): void;
}

export const Form: FC<PropsWithChildren<FormProps>> = props => {

  const { id, onSubmit } = props;

  const handleSubmit = useCallback((ev: FormEvent) => {
    onSubmit();
    ev.preventDefault();
    ev.stopPropagation();
  }, [onSubmit]);

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`form ${props.className || ""}`}
      noValidate>{props.children}</form>
  );
};