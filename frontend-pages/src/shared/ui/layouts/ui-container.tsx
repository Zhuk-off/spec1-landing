import clsx from "clsx";
import { ReactNode } from "react";

export default function UiContainer({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto max-w-[1440px] px-2", className)}>
      {children}
    </div>
  );
}
