import type { FC } from "react";
import type Stripe from "stripe";
import { TextField } from "../TextField/TextField";
import { CheckboxField } from "../CheckboxField/CheckboxField";
import { DateField } from "../DateField/DateField";
import { FieldSet } from "../FieldsSet/FieldsSet";

export interface EventDetailsProps {
  readonly event: Stripe.Event;
}

export const EventDetails: FC<EventDetailsProps> = props => {
  const { event } = props;

  return (
    <section>
      <h2>Event {event.id}</h2>

      <FieldSet>
        <TextField
          label="Event ID"
          value={event.id}
          readOnly
          layout="horizontal"
        />

        <TextField
          label="Type"
          value={event.type}
          readOnly
          layout="horizontal"
        />

        <DateField
          label="Created"
          value={event.created}
          readOnly
          layout="horizontal"
        />

        <TextField
          label="API Version"
          value={event.api_version || "N/A"}
          readOnly
          layout="horizontal"
        />

        <CheckboxField
          label="Livemode"
          value={event.livemode}
          readOnly
          layout="horizontal"
        />

        {event.request && (
          <TextField
            label="Request ID"
            value={typeof event.request === "string" ? event.request : event.request.id || ""}
            readOnly
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
