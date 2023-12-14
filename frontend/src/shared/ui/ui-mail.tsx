import clsx from "clsx";
import SvgMail from "@/shared/lib/icons/svg-mail";

type IMail = {
  mail: string;
  className?: string;
};

export const UiMail = ({ mail, className }: IMail) => {
  return (
    <a href={`mailto:${mail}`} className={clsx(className, "inline-block")}>
      <div className="flex items-center gap-2 text-spec-gold-light transition-colors md:hover:text-spec-gold-light-hover">
        <SvgMail />
        <div className="font-specTitle text-lg font-bold tracking-wider ">
          {mail}
        </div>
      </div>
    </a>
  );
};
