import { type FC } from "react";
import { useEventDetails } from "../../hooks/useEventDetails";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { EventDetails } from "./EventDetails";

export interface EventDetailsContainerProps {
  readonly eventId: string;
}

export const EventDetailsContainer: FC<EventDetailsContainerProps> = props => {
  const eventId = props.eventId;

  const event = useEventDetails(eventId);

  if (event) {
    return (
      <EventDetails event={event} />
    );
  }

  return (
    <LoadingPanel />
  );
};
