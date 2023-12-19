import clsx from "clsx";
import SvgPhone from "@/shared/ui/icons/svg-phone";

type IPhone = {
  phone: string;
  phoneLink: string;
  className?: string;
};

export const UiPhone = ({ phone, phoneLink, className }: IPhone) => {
  return (
    <a href={`${phoneLink}`} className={clsx(className, "")}>
      <div className="flex items-center gap-2 text-spec-gold-light transition-colors md:hover:text-spec-gold-light-hover">
        <SvgPhone className="ml-[2px]" />
        <div className="font-specTitle text-lg font-bold">{phone}</div>
      </div>
    </a>
  );
};
