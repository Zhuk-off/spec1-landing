"use client";
import { useState } from "react";
import clsx from "clsx";
import { Welcome } from "@/shared/lib/types";
import { MainScreen } from "@/widgets/main-screen";
import { UiFooter } from "@/shared/ui/ui-footer";
import sectionRenderer from "../model/section-renderer";
import { getFullUrl } from "@/shared/lib/constants/helpers/helpers";

export default function HomePageView({ data }: { data: Welcome }) {
  const [openMenu, setOpenMenu] = useState(false);
  const dataRes = data.data.attributes;
  const header = dataRes.Header;
  const menu = dataRes.Menu.item;
  const { address, copyright, email, logo, phone, social, working } =
    dataRes.footer;
  const mainImage = {
    url:
      process.env.NEXT_PUBLIC_STRAPI_API_URL +
      dataRes.imagemain.imagemain.data.attributes.url,
    alt: dataRes.imagemain.imagemain.data.attributes.alternativeText,
    width: dataRes.imagemain.imagemain.data.attributes.width,
    height: dataRes.imagemain.imagemain.data.attributes.height,
  };
  const section = dataRes.contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index),
  );
  // console.log("mainImage Url", mainImage.url);

  return (
    <main
      className={clsx(
        "relative min-h-full bg-scroll",
        openMenu && "h-screen overflow-hidden",
      )}
      style={{ backgroundImage: "url('background.webp')" }}
    >
      <MainScreen
        header={header}
        menu={menu}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        mainImage={mainImage}
      />

      {section}

      <UiFooter
        logoImg={getFullUrl(logo.image.data.attributes.url)}
        menu={menu}
        address={address}
        working={working}
        phone={phone.number}
        phoneLink={phone.link}
        mail={email.email}
        viberLink={social.viber}
        telegramLink={social.telegram}
        copyright={copyright}
      />
    </main>
  );
}
