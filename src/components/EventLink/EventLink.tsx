import type { FC } from "react";
import type Stripe from "stripe";
import { Link } from "../Link/Link";

export interface EventLinkProps {
  readonly event: Stripe.Event;
}

export const EventLink: FC<EventLinkProps> = props => {
  const { event } = props;

  return (
    <Link to={`/events/${event.id}`}>
      {event.id}
    </Link>
  );
};
