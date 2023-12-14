import clsx from "clsx";
import { ReactNode } from "react";
import SvgMenu from "@/shared/ui/icons/svg-menu";

export function UiHeader({
  className,
  contacts,
  links,
  logo,
}: {
  className?: string;
  links?: ReactNode;
  contacts?: ReactNode;
  logo?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        "flex w-full items-center justify-between px-2 py-4 sm:px-6 sm:py-6 ",
        className,
      )}
    >
      <div className="hidden sm:block">{contacts}</div>
      <div className="flex-shrink-0">{logo}</div>
      <div className="hidden sm:block">{links}</div>
      <div className="block animate-pulse text-spec-gold-light sm:hidden">
        <SvgMenu />
      </div>
    </header>
  );
}
