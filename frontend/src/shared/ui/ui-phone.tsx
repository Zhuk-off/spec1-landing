import clsx from "clsx";
import Image from "next/image";
import phoneLogo from "/public/phone.svg";
import SvgPhone from "@/shared/lib/icons/svg-phone";

type IPhone = {
  phone: string;
  phoneLink: string;
  className?: string;
};

export const UiPhone = ({ phone, phoneLink, className }: IPhone) => {
  return (
    <a href={`tel:${phoneLink}`} className={clsx(className, "inline-block")}>
      <div className="flex items-center gap-2 text-spec-gold-light transition-colors md:hover:text-spec-gold-light-hover">
        <SvgPhone className="ml-[2px]" />
        <div className="font-specTitle text-lg font-bold">{phone}</div>
      </div>
    </a>
  );
};
