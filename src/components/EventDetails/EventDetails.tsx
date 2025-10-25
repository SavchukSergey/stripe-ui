import type { FC } from "react";
import type Stripe from "stripe";
import { TextField } from "../TextField/TextField";
import { CheckboxField } from "../CheckboxField/CheckboxField";
import { FieldSet } from "../FieldsSet/FieldsSet";
import { FormFieldLayout } from "../FormFieldLayout/FormFieldLayout";
import { useHtmlId } from "../../utils/useHtmlId";

export interface EventDetailsProps {
  readonly event: Stripe.Event;
}

export const EventDetails: FC<EventDetailsProps> = props => {
  const { event } = props;
  const createdId = useHtmlId();

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString();
  };

  return (
    <section>
      <h2>Event {event.id}</h2>

      <FieldSet>
        <TextField
          label="Event ID"
          value={event.id}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        <TextField
          label="Type"
          value={event.type}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        <FormFieldLayout label="Created" id={createdId} layout="horizontal">
          <div className="form-control-plaintext">{formatDate(event.created)}</div>
        </FormFieldLayout>

        <TextField
          label="API Version"
          value={event.api_version || "N/A"}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        <CheckboxField
          label="Livemode"
          value={event.livemode}
          onChange={() => {}}
          readOnly={true}
          layout="horizontal"
        />

        {event.request && (
          <TextField
            label="Request ID"
            value={typeof event.request === "string" ? event.request : event.request.id || ""}
            onChange={() => {}}
            readOnly={true}
            layout="horizontal"
          />
        )}
      </FieldSet>

      <h3>Event Data</h3>
      <pre style={{
        backgroundColor: "#f5f5f5",
        padding: "1rem",
        borderRadius: "4px",
        overflow: "auto",
        maxHeight: "500px"
      }}>
        {JSON.stringify(event.data, null, 2)}
      </pre>
    </section>
  );
};
