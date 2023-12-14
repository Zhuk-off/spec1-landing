import clsx from "clsx";
import { UiMenuItem } from "./ui-menu-item";
import { Dispatch, SetStateAction } from "react";

type ILogo = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

const menuMock = [
  {
    text: "Главная",
    link: "/",
  },
  {
    text: "О нас",
    link: "#about",
  },
  {
    text: "Магазин",
    link: "#shop",
  },
  {
    text: "Рассрочка",
    link: "#",
  },
  {
    text: "Доставка",
    link: "#ship",
  },
  {
    text: "Контакты",
    link: "#contact",
  },
];

export const UiMenu = ({ openMenu, setOpenMenu, className }: ILogo) => {
  return (
    <nav
      className={clsx(
        className,
        "fixed left-[100%] top-0 h-full w-full overflow-auto bg-black px-2 py-20 transition-all ease-linear sm:static sm:h-auto sm:w-auto sm:bg-opacity-0 sm:py-5",
        openMenu && "left-[0%]",
      )}
    >
      <ul
        className={clsx(
          "flex h-full flex-col flex-wrap items-center justify-center gap-8 sm:h-auto sm:flex-row sm:justify-between sm:gap-0",
          openMenu ? "" : "",
        )}
      >
        {menuMock.map((item, index) => (
          <li key={index} className="mx-2 ">
            <UiMenuItem
              href={item.link}
              text={item.text}
              setOpenMenu={setOpenMenu}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
