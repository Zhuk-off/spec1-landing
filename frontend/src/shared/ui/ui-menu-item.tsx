import Link from "next/link";
import clsx from "clsx";
import { Dispatch, MouseEvent, SetStateAction } from "react";

type IMenuItem = {
  href: string;
  text: string;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

export const UiMenuItem = ({
  href,
  text,
  setOpenMenu,
  className,
}: IMenuItem) => {
  const handleMenuClick = (e: MouseEvent, link: string) => {
    e.preventDefault();
    setOpenMenu(false);
    setTimeout(() => {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <Link
      href={href}
      onClick={(e) => {
        handleMenuClick(e, href);
      }}
      className={clsx(
        "font-specTitle text-3xl uppercase tracking-widest text-spec-gold-light transition-colors sm:text-lg sm:tracking-wider md:hover:text-spec-gold-light-hover lg:text-xl",
        className,
      )}
    >
      {text}
    </Link>
  );
};
