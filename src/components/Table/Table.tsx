import type { FC, PropsWithChildren } from "react";

export interface TableProps {
  readonly className?: string;
}

export const Table: FC<PropsWithChildren<TableProps>> = props => {

  return (
    <table className={`table table-striped ${props.className}`}>
      {props.children}
    </table>
  );
};