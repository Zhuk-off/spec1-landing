import clsx from "clsx";
import { ReactNode } from "react";
import SvgTelegram from "./icons/svg-telegram";
import SvgViber from "./icons/svg-viber";
import UiContainer from "./layouts/ui-container";
import { UiLogo } from "./ui-logo";
import { UiMail } from "./ui-mail";
import { UiMenuItem } from "./ui-menu-item";
import { UiPhone } from "./ui-phone";
import { UiSocialIcon } from "./ui-social-icon";

export function UiFooter({
  className,
  logoImg,
  menu,
}: {
  className?: string;
  links?: ReactNode;
  contacts?: ReactNode;
  logoImg: string;
  menu: {
    text: string;
    link: string;
  }[];
}) {
  return (
    <footer
      className={clsx(
        "bg-spec-bg-black px-3 pt-10 sm:px-6 sm:pt-20 md:px-10 md:pt-20 lg:pt-24",
        className,
      )}
    >
      <UiContainer>
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-0">
          <div className="order-3 flex-1 font-bold tracking-wide text-spec-gold-light sm:order-1 sm:font-specTitle sm:text-xl">
            <div className="flex flex-col items-center gap-3 text-center sm:max-w-xs sm:items-start sm:gap-10 sm:text-start">
              <div className="">Время работы: 9:00-19:00 без выходных</div>
              <div className="">
                г. Витебск ул. Терешковой 1, СтройМаркет Энергия павильон 1
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-1 flex-col items-center sm:order-2">
            <UiLogo logoUrl={logoImg} />
            <div className="mt-2">
              <UiPhone
                phone={"+375 (29) 516-44-44"}
                phoneLink="+375295116444"
              />
              <UiMail mail="zhukoff@gmail.com" />
            </div>

            <div className="mt-10 flex gap-5">
              <UiSocialIcon
                icon={<SvgTelegram />}
                href="https://t.me/+375445959498"
                ariaLabel="Telegram"
                className="text-spec-gold-light-hover transition-colors md:hover:text-spec-gold-light"
              />
              <UiSocialIcon
                icon={<SvgViber />}
                href="viber://chat?number=+375445959498"
                ariaLabel="Viber"
                className="text-spec-gold-light-hover transition-colors md:hover:text-spec-gold-light"
              />
            </div>
          </div>

          <div className="order-2 flex-1 sm:order-3">
            <nav className="flex justify-center text-center sm:justify-end sm:text-left">
              <ul className="flex flex-col gap-1">
                {menu.map((item, index) => (
                  <li key={index}>
                    <UiMenuItem
                      href={item.link}
                      text={item.text}
                      className="text-lg"
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="text pb-3 pt-10 text-center text-spec-gold-light">
          © 2024 ЧТПУП Аникогрупп все права защищены
        </div>
      </UiContainer>
    </footer>
  );
}
