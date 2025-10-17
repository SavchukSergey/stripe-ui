import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { TextInput } from "../TextInput/TextInput";

export interface TextFieldProps {
    readonly label: string;
    readonly value: string;
    onChange(value: string): void;
}

export const TextField: FC<TextFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label} id={id}>
      <TextInput id={id} value={props.value} onChange={props.onChange} />
    </FormFieldLayout>
  );
};