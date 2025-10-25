import { type FC } from "react";
import { CommonPage } from "../components/CommonPage/CommonPage";
import { EventsListContainer } from "../components/EventsList/EventsListContainer";

export const EventsPage: FC = () => {

  return (
    <CommonPage>
      <h1>Events</h1>
      <EventsListContainer />
    </CommonPage>
  );
};
