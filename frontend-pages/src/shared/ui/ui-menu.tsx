import clsx from "clsx";
import { UiMenuItem } from "./ui-menu-item";
import { Dispatch, SetStateAction } from "react";
import { Item } from "../lib/types";

type IMenu = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  menuData: Item[]
  className?: string;
};

export const UiMenu = ({
  openMenu,
  setOpenMenu,
  menuData,
  className,
}: IMenu) => {
  return (
    <nav
      className={clsx(
        className,
        "fixed top-0 z-40 h-full w-full overflow-auto bg-black px-2 py-20 transition-all ease-linear sm:relative sm:left-0 sm:h-auto sm:w-auto sm:bg-opacity-0 sm:py-5",
        openMenu ? "left-[0%]" : "left-[100%]",
      )}
    >
      <ul
        className={clsx(
          "flex h-full flex-col flex-wrap items-center justify-center gap-8 sm:h-auto sm:flex-row sm:justify-between sm:gap-0",
          openMenu ? "" : "",
        )}
      >
        {menuData.map((item, index) => (
          <li key={index} className="mx-2 ">
            <UiMenuItem
              href={item.link}
              text={item.name}
              setOpenMenu={setOpenMenu}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
