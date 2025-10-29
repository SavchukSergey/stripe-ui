import type { FC } from "react";
import { useHtmlId } from "../../utils/useHtmlId";
import { EmailInput } from "../EmailInput/EmailInput";
import { FormFieldLayout, type FormFieldLayoutType } from "../FormFieldLayout/FormFieldLayout";
import { Link } from "../Link/Link";

export interface EmailFieldProps {
  readonly label: string;
  readonly value: string | null;
  readonly layout?: FormFieldLayoutType;
  readonly readOnly?: boolean;
  onChange?(value: string): void;
}

export const EmailField: FC<EmailFieldProps> = props => {
  const id = useHtmlId();

  return (
    <FormFieldLayout label={props.label} id={id} layout={props.layout}>
      {props.readOnly ? (props.value ? <Link to={`mailto:${props.value}`} className="form-control-plaintext">{props.value}</Link> : "-") :
        <EmailInput id={id} value={props.value || ""} onChange={props.onChange} readOnly={props.readOnly} />
      }
    </FormFieldLayout>
  );
};