import { UiLogo } from "@/shared/ui/ui-logo";
import logoImg from "/public/logo.svg";
import { UiPhone } from "@/shared/ui/ui-phone";
import { UiMail } from "@/shared/ui/ui-mail";
import { UiSocialIcon } from "@/shared/ui/ui-social-icon";
import SvgTelegram from "@/shared/ui/icons/svg-telegram";
import SvgViber from "@/shared/ui/icons/svg-viber";
import { UiHeader } from "@/shared/ui/ui-header";
import UiContainer from "@/shared/ui/layouts/ui-container";

export async function HomePage() {
  const contact = (
    <div>
      <UiPhone phone={"+375 (29) 516-44-44"} phoneLink="+375295116444" />
      <UiMail mail="zhukoff@gmail.com" />
    </div>
  );
  const links = (
    <div className="flex gap-5">
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
  );

  return (
    <main
      className="min-h-full bg-scroll"
      style={{ backgroundImage: "url('background.webp')" }}
    >
      <UiContainer>
        <UiHeader
          contacts={contact}
          logo={<UiLogo logoUrl={logoImg} />}
          links={links}
        />
      </UiContainer>

      <div className="flex flex-col"></div>
    </main>
  );
}
