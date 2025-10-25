import type { FC } from "react";
import "./EventTypeSpan.scss";

export interface EventTypeSpanProps {
  readonly type: string;
}

export const EventTypeSpan: FC<EventTypeSpanProps> = props => {
  return (
    <span className="event-type-span">
      {props.type}
    </span>
  );
};
