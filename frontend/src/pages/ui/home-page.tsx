"use client";
import logoImg from "/public/logo.svg";
import { SetStateAction, useState } from "react";
import clsx from "clsx";
import { Welcome } from "@/shared/lib/types";
import { MainScreen } from "@/widgets/main-screen";
import { AboutScreen } from "@/widgets/about-screen";
import { StorefrontScreen } from "@/widgets/storefront-screen";
import { InstallmentScreen } from "@/widgets/installment-screen";
import { ShippingScreen } from "@/widgets/shipping-screen";
import { ContactsScreen } from "@/widgets/contacts-screen";
import { UiFooter } from "@/shared/ui/ui-footer";
import { sectionRenderer } from "../model/section-renderer";

const menuMock = [
  {
    text: "Главная",
    link: "#main",
  },
  {
    text: "О нас",
    link: "#about",
  },
  {
    text: "Магазин",
    link: "#shop",
  },
  {
    text: "Рассрочка",
    link: "#installment",
  },
  {
    text: "Доставка",
    link: "#ship",
  },
  {
    text: "Контакты",
    link: "#contact",
  },
];

export function HomePageView({ data }: { data: Welcome }) {
  const [openMenu, setOpenMenu] = useState(false);
  const dataRes = data.data.attributes;
  const header = dataRes.Header;
  const menu = dataRes.Menu.item;
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

  return (
    <main
      id="main"
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

      {/* <StorefrontScreen /> */}

      {/* <InstallmentScreen /> */}

      <ShippingScreen />

      <ContactsScreen />

      <UiFooter logoImg={logoImg} menu={menuMock} />
    </main>
  );
}
