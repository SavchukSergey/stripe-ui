import type { FC } from "react";
import { Button } from "../Button/Button";

export interface RemoveButtonProps {
  readonly label?: string;
  onClick(): void;
}

export const RemoveButton: FC<RemoveButtonProps> = props => {
  const handleClick = () => {
    if (confirm("Are you sure")) {
      props.onClick();
    }
  };

  return (
    <Button type="button" severity="danger" onClick={handleClick}>{props.label || "Remove"}</Button>
  );
};