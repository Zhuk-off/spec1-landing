"use client";
import logoImg from "/public/logo.svg";
import { SetStateAction, useState } from "react";
import clsx from "clsx";
import { ResponseBackend } from "@/shared/lib/types";
import { MainScreen } from "@/widgets/main-screen";
import { AboutScreen } from "@/widgets/about-screen";
import { StorefrontScreen } from "@/widgets/storefront-screen";
import { InstallmentScreen } from "@/widgets/installment-screen";
import { ShippingScreen } from "@/widgets/shipping-screen";
import { ContactsScreen } from "@/widgets/contacts-screen";
import { UiFooter } from "@/shared/ui/ui-footer";

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

export function HomePageView({ data }: { data: ResponseBackend }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main
      id="main"
      className={clsx(
        "relative min-h-full bg-scroll",
        openMenu && "h-screen overflow-hidden",
      )}
      style={{ backgroundImage: "url('background.webp')" }}
    >
      <MainScreen data={data} openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <AboutScreen />

      <StorefrontScreen />

      <InstallmentScreen />

      <ShippingScreen />

      <ContactsScreen />

      <UiFooter logoImg={logoImg} menu={menuMock} />
    </main>
  );
}
