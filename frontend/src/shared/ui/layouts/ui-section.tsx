import clsx from "clsx";
import { ReactNode } from "react";

export default function UiSection({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("py-14 px-3 sm:px-6 sm:py-20 md:px-14 md:py-20 lg:py-24", className)}>
      {children}
    </div>
  );
}
