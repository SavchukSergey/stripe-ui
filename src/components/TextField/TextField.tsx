import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";
import { TextInput } from "../TextInput/TextInput";

export interface TextFieldProps {
  readonly label: string;
  readonly value: string;
  readonly layout?: FormFieldLayoutType;
  readonly readOnly?: boolean;
  onChange(value: string): void;
}

export const TextField: FC<TextFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label} id={id} layout={props.layout}>
      <TextInput id={id} value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
    </FormFieldLayout>
  );
};