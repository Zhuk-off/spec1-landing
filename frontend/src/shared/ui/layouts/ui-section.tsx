import clsx from "clsx";
import { ReactNode } from "react";

export default function UiSection({
  children,
  className,
  id
}: {
  children?: ReactNode;
  className?: string;
  id?:string
}) {
  return (
    <section id={id}
      className={clsx(
        "px-3 py-10 sm:px-6 sm:py-20 md:px-10 md:py-20 lg:py-24",
        className,
      )}
    >
      {children}
    </section>
  );
}
