import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { UiButtonMenu } from "./ui-button-menu";

export function UiHeader({
  className,
  contacts,
  links,
  logo,
  openMenu,
  setOpenMenu,
}: {
  className?: string;
  links?: ReactNode;
  contacts?: ReactNode;
  logo?: ReactNode;
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header
      className={clsx(
        "flex w-full items-center justify-between px-2 py-4 sm:px-6 sm:py-6",
        className,
      )}
    >
      <div className="hidden sm:block">{contacts}</div>
      <div className="relative z-10 flex-shrink-0">{logo}</div>
      <div className="hidden sm:block">{links}</div>
      <div className="relative z-10 block animate-pulse text-spec-gold-light sm:hidden">
        <UiButtonMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </header>
  );
}
