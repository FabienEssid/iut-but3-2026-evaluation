import clsx from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";

export const Card = ({ className, ...rest }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return <div className={clsx("shadow-md rounded-md", className)} {...rest} />;
};
