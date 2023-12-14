import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import SvgMenu from "./icons/svg-menu";
import SvgClose from "./icons/svg-close";

type IButton = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButtonMenu = ({
  openMenu = false,
  setOpenMenu,
  className,
}: IButton) => {
  return (
    <button
      className={clsx(className, "")}
      aria-label="menu"
      onClick={() => setOpenMenu(!openMenu)}
    >
      {openMenu ? <SvgClose /> : <SvgMenu />}
    </button>
  );
};
