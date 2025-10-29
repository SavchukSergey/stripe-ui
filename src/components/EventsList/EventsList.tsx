import type { FC } from "react";
import type Stripe from "stripe";
import { DateCell } from "../DateCell/DateCell";
import { EventLink } from "../EventLink/EventLink";
import { EventTypeSpan } from "../EventTypeSpan/EventTypeSpan";
import { Table } from "../Table/Table";

export interface EventsListProps {
  readonly events: readonly Stripe.Event[];
}

export const EventsList: FC<EventsListProps> = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Created</th>
          <th>API Version</th>
        </tr>
      </thead>
      <tbody>
        {props.events.map(event => {
          return (
            <tr key={event.id}>
              <td>
                <EventLink event={event} />
              </td>
              <td>
                <EventTypeSpan type={event.type} />
              </td>
              <DateCell value={event.created} />
              <td>
                {event.api_version || "N/A"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
