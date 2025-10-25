import { type FC } from "react";
import { useEventsList } from "../../hooks/useEventsList";
import { LoadingPanel } from "../LoadingPanel/LoadingPanel";
import { EventsList } from "./EventsList";

export const EventsListContainer: FC = () => {
  const events = useEventsList();

  if (events) {
    return (
      <EventsList events={events.data} />
    );
  }

  return <LoadingPanel />;
};
