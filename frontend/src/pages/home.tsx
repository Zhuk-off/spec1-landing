"use client";
import { UiLogo } from "@/shared/ui/ui-logo";
import logoImg from "/public/logo.svg";
import { UiPhone } from "@/shared/ui/ui-phone";
import { UiMail } from "@/shared/ui/ui-mail";
import { UiSocialIcon } from "@/shared/ui/ui-social-icon";
import SvgTelegram from "@/shared/ui/icons/svg-telegram";
import SvgViber from "@/shared/ui/icons/svg-viber";
import { UiHeader } from "@/shared/ui/ui-header";
import UiContainer from "@/shared/ui/layouts/ui-container";
import { UiMenu } from "@/shared/ui/ui-menu";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import bg from "/public/bg-promo.webp";

export function HomePage() {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  const contact = (
    <div>
      <UiPhone phone={"+375 (29) 516-44-44"} phoneLink="+375295116444" />
      <UiMail mail="zhukoff@gmail.com" />
    </div>
  );
  const links = (
    <div className="flex w-[150px] flex-row-reverse gap-5 md:w-[202px]">
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
      className={clsx(
        "relative min-h-full bg-scroll",
        openMenu && "h-screen overflow-hidden",
      )}
      style={{ backgroundImage: "url('background.webp')" }}
    >
      <UiContainer>
        <UiHeader
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          contacts={contact}
          logo={<UiLogo logoUrl={logoImg} />}
          links={links}
        />
      </UiContainer>
      <div className="sticky top-0 bg-black/70 ">
        <UiContainer>
          <UiMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </UiContainer>
      </div>
      <div className="h-[2000px] w-full">
        <div className="pt-10 bg-black">
          <Image alt="Spec 1" src={bg} priority className=""/>
        </div>
      </div>

    </main>
  );
}
