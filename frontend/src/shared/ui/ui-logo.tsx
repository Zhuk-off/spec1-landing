import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { ROUTER_PATHS } from "../lib/constants/routes";

type ILogo = {
  logoUrl: string;
  className?: string;
};

export const UiLogo = ({ logoUrl, className }: ILogo) => {
  return (
    <Link href={ROUTER_PATHS.HOME_PAGE} className={clsx(className, "")}>
      <Image
        src={logoUrl}
        alt="logo"
        width={180}
        height={70}
        priority
        className="transition-transform md:hover:scale-[101%]"
      />
    </Link>
  );
};
