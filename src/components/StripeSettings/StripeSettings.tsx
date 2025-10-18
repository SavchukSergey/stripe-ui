import { useState, type FC } from "react";
import { getStripeKey, setStripeKey } from "../../hooks/useStripeKey";
import { Button } from "../Button/Button";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { Form } from "../Form/Form";
import { TextField } from "../TextField/TextField";

import "./StripeSettings.scss";

export const StripeSettings: FC = () => {

  const [key, setKey] = useState(getStripeKey());

  const handleSubmit = () => {
    setStripeKey(key);
  };

  return (
    <Form onSubmit={handleSubmit} className="stripe-settings">
      <FieldSet className="stripe-settings__fields">
        <TextField label="Stripe Key" value={key || ""} onChange={setKey} layout="horizontal" />
        <Button type="submit">Set</Button>
      </FieldSet>
    </Form>
  );
};