import { type FC } from "react";
import { useParams } from "react-router-dom";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { EventDetailsContainer } from "../components/EventDetails/EventDetailsContainer";

export const EventDetailsPage: FC = () => {
  const { eventId } = useParams();

  if (!eventId) {
    return (
      <CommonPage>
        <h1>Event not found</h1>
      </CommonPage>
    );
  }

  return (
    <CommonPage>
      <EventDetailsContainer eventId={eventId} />
    </CommonPage>
  );
};
