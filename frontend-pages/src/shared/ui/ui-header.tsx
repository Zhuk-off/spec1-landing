import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { UiButtonMenu } from "./ui-button-menu";

export function UiHeader({
  className,
  contacts,
  links,
  logo,
  openMenu,
  setOpenMenu,
  id,
}: {
  className?: string;
  links?: ReactNode;
  contacts?: ReactNode;
  logo?: ReactNode;
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  id: string;
}) {
  return (
    <header
      id={id}
      className={clsx(
        "flex w-full items-center justify-between px-2 py-4 sm:px-6 sm:py-6",
        className,
      )}
    >
      <div className="hidden sm:block">{contacts}</div>
      <div className="relative z-40 flex-shrink-0">{logo}</div>
      <div className="hidden sm:block">
        <div className="flex w-[150px] flex-row-reverse gap-5 md:w-[202px]">
          {links}
        </div>
      </div>
      <div className="relative z-40 block animate-pulse text-spec-gold-light sm:hidden">
        <UiButtonMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </header>
  );
}
