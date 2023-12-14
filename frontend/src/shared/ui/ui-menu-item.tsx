import Link from "next/link";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

type ILogo = {
  href: string;
  text: string;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

export const UiMenuItem = ({ href, text, setOpenMenu, className }: ILogo) => {
  return (
    <Link
      href={href}
      onClick={() => setOpenMenu(false)}
      className={clsx(
        className,
        "font-specTitle text-3xl uppercase tracking-widest text-spec-gold-light transition-colors sm:text-lg sm:tracking-wider md:hover:text-spec-gold-light-hover lg:text-xl",
      )}
    >
      {text}
    </Link>
  );
};
