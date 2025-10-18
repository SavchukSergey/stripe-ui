import type { FC, PropsWithChildren } from "react";

export interface CommonPageProps {
  readonly className?: string;
}

export const CommonPage: FC<PropsWithChildren<CommonPageProps>> = props => {
  return (
    <div className={`common-page ${props.className}`}>
      {props.children}
    </div>
  );
};