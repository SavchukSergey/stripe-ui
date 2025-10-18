import type { FC } from "react";
import { Button } from "../Button/Button";

export interface EntityActionsProps {
  readonly className?: string;
}

export const EntityActions: FC<EntityActionsProps> = props => {
  return (
    <div className={`entity-actions ${props.className || ""}`}>
      <Button type="submit">Save</Button>
    </div>
  );
};