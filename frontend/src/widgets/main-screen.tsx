import { Header, Item } from "@/shared/lib/types";
import SvgTelegram from "@/shared/ui/icons/svg-telegram";
import SvgViber from "@/shared/ui/icons/svg-viber";
import UiContainer from "@/shared/ui/layouts/ui-container";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiLogo } from "@/shared/ui/ui-logo";
import { UiMail } from "@/shared/ui/ui-mail";
import { UiMenu } from "@/shared/ui/ui-menu";
import { UiPhone } from "@/shared/ui/ui-phone";
import { UiSocialIcon } from "@/shared/ui/ui-social-icon";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import profilePic from "/public/bg-promo.webp";

export function MainScreen({
  header,
  menu,
  mainImage,
  openMenu,
  setOpenMenu,
}: {
  header: Header;
  menu: Item[];
  mainImage: {
    url: string;
    alt: string | null;
    width: number;
    height: number;
  };
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const logoUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL +
    header.logo.image.data.attributes.url;
  // console.log("logo Url", logoUrl);
  // console.log("mainImage Url", mainImage.url);

  return (
    <>
      {/* <div
    className={clsx(
        "flex min-h-screen flex-col",
    openMenu && "h-screen overflow-hidden",
      )}
     > */}
      <div className="bg-spec-bg-black">
        <UiContainer>
          <UiHeader
            id={header.linkForMenu}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            contacts={
              <>
                <UiPhone
                  phone={header.phone.number}
                  phoneLink={header.phone.link}
                />
                <UiMail mail={header.email.email} />
              </>
            }
            logo={<UiLogo logoUrl={logoUrl} />}
            links={
              <>
                <UiSocialIcon
                  icon={<SvgTelegram />}
                  href={header.social.telegram}
                  ariaLabel="Telegram"
                  className="text-spec-gold-light-hover transition-colors md:hover:text-spec-gold-light"
                />
                <UiSocialIcon
                  icon={<SvgViber />}
                  href={header.social.viber}
                  ariaLabel="Viber"
                  className="text-spec-gold-light-hover transition-colors md:hover:text-spec-gold-light"
                />
              </>
            }
          />
        </UiContainer>
      </div>

      <div className="sticky top-0 z-30 bg-black/70 sm:backdrop-blur-[2px]">
        <UiContainer>
          <UiMenu
            menuData={menu}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
        </UiContainer>
      </div>

      {/* Central image and filters start  */}
      <div className="mainheight flex grow flex-col justify-center">
        {/* <div className="relative flex grow flex-col justify-center bg-black pr-5 pt-16 sm:pt-10"> */}
        <div className="h-full w-full bg-black grow relative">
          
            <Image
              alt={mainImage?.alt ? mainImage.alt : ""}
              src={mainImage.url}
              // src={profilePic}
              // width={mainImage.width}
              // height={mainImage.height}
              // priority
              // fill
              // sizes="100vh"
              className="animate-scale-in-top object-contain"
              fill
              priority
            />
        

          {/* <div className="relative -mt-10 h-10 bg-gradient-to-t from-black to-transparent md:h-10"></div>
            <div className="relative -mt-10 h-10 bg-gradient-to-t from-black to-transparent md:-mt-20 md:h-20"></div> */}
        </div>
        <div className="h-20 bg-black md:h-20"></div>
      </div>
      {/* </div> */}
      {/* <div className="from-spec-black-light h-8 bg-gradient-to-t to-black md:h-20"></div> */}
      {/* Central image and filters end  */}
    </>
    // </div>
  );
}
