import type { FC } from "react";
import type Stripe from "stripe";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { useHtmlId } from "../../utils/useHtmlId";
import { CustomerInput } from "../CustomerInput/CustomerInput";

export interface CustomerSelectFieldProps {
  readonly label?: string;
  readonly value: string | Stripe.Customer | Stripe.DeletedCustomer | null;
  onChange(value: string): void;
  readonly readOnly?: boolean;
  readonly layout?: "vertical" | "horizontal";
}

export const CustomerSelectField: FC<CustomerSelectFieldProps> = props => {
  const htmlId = useHtmlId();

  return (
    <FormFieldLayout label={props.label || "Customer"} id={htmlId} layout={props.layout}>
      <CustomerInput
        id={htmlId}
        value={props.value}
        onChange={props.onChange}
        readOnly={props.readOnly}
      />
    </FormFieldLayout>
  );
};
