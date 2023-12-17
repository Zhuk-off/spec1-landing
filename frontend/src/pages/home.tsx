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
import team from "/public/about-team.jpg";
import spec1 from "/public/spec1.webp";
import trheeMSVG from "/public/slider/3m.svg";
import aegSVG from "/public/slider/aeg.svg";
import boschSVG from "/public/slider/bosch.svg";
import echoSVG from "/public/slider/echo.svg";
import efcoSVG from "/public/slider/efco.svg";
import fiskarsSVG from "/public/slider/fiskars.svg";
import husqvarnaSVG from "/public/slider/husqvarna.svg";
import husqvarnaVikingSVG from "/public/slider/husqvarnaViking.svg";
import makitaSVG from "/public/slider/makita.svg";
import milwaukeeSVG from "/public/slider/milwaukee.svg";
import oleomacSVG from "/public/slider/oleomac.svg";
import ryobiSVG from "/public/slider/ryobi.svg";
import wiloSVG from "/public/slider/wilo.svg";
import shop from "/public/shop1.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { UiTitle } from "@/shared/ui/ui-title";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiShopCat } from "@/shared/ui/ui-shop-cat";

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
      <div className="sticky top-0 z-30 bg-black/70">
        <UiContainer>
          <UiMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </UiContainer>
      </div>

      {/* Central image and filters start  */}
      <div className="w-full">
        <div className=" relative bg-black pr-5 pt-5 sm:pt-10">
          <Image
            alt="Spec 1"
            src={bg}
            priority
            className="animate-scale-in-top"
          />

          <div className="relative -mt-10 h-10 bg-gradient-to-t from-black to-transparent md:h-10"></div>
          <div className="relative -mt-10 h-10 bg-gradient-to-t from-black to-transparent md:-mt-20 md:h-20"></div>
        </div>
      </div>
      <div className="from-spec-black-light h-8 bg-gradient-to-t to-black md:h-20"></div>
      {/* Central image and filters end  */}

      {/* Block About Us start */}
      <UiSection className="bg-spec-black-light relative">
        <UiContainer>
          <div className="relative mt-2 flex min-h-[300px] md:px-0 lg:mt-10">
            <div className="relative z-10 flex w-full flex-col md:w-1/2 ">
              <UiTitle title="О команде" />

              <div className="text-spec-text-white">
                <p className="">
                  Мы приглашаем вас узнать больше о нашей компании на этой
                  странице. Здесь вы можете прочитать о нашей истории, узнать о
                  наших ценностях, и о том, как мы стремимся обеспечить нашим
                  клиентам только лучшие продукты и услуги.{" "}
                </p>
                <p>
                  Мы приглашаем вас узнать больше о нашей компании на этой
                  странице. Здесь вы можете прочитать о нашей истории, узнать о
                  наших ценностях, и о том, как мы стремимся обеспечить нашим
                  клиентам только лучшие продукты и услуги.{" "}
                </p>
                <p>
                  Мы приглашаем вас узнать больше о нашей компании на этой
                  странице. Здесь вы можете прочитать о нашей истории, узнать о
                  наших ценностях, и о том, как мы стремимся обеспечить нашим
                  клиентам только лучшие продукты и услуги.{" "}
                </p>
                <p>
                  Мы приглашаем вас узнать больше о нашей компании на этой
                  странице. Здесь вы можете прочитать о нашей истории, узнать о
                  наших ценностях, и о том, как мы стремимся обеспечить нашим
                  клиентам только лучшие продукты и услуги.{" "}
                </p>
              </div>
            </div>
            <div className="absolute left-0 top-1/2 z-0 max-h-full min-h-[200px] w-full -translate-y-1/2 overflow-hidden md:left-1/3 md:w-2/3">
              <div className="bg-spec-black-light/50 md:bg-spec-black-light/0 absolute inset-0 z-0 backdrop-blur-sm md:backdrop-blur-0"></div>
              <div className="to-spec-black-light absolute inset-0 w-1/2 bg-gradient-to-l from-transparent"></div>
              <div className="to-spec-black-light absolute bottom-0 left-1/2 right-0 top-0 w-1/2 bg-gradient-to-r from-transparent"></div>
              <Image
                src={team}
                alt="team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="pt-5 md:px-0 md:pt-12">
            <div className="flex flex-col items-center gap-0 md:flex-row-reverse md:gap-5">
              <div className="flex-1 shadow-2xl md:px-7 md:py-14">
                <UiTitle title="О компании" />
                <div className="text-spec-text-white">
                  <p className="">
                    Мы приглашаем вас узнать больше о нашей компании на этой
                    странице. Здесь вы можете прочитать о нашей истории, узнать
                    о наших ценностях, и о том, как мы стремимся обеспечить
                    нашим клиентам только лучшие продукты и услуги.{" "}
                  </p>
                  <p>
                    Мы приглашаем вас узнать больше о нашей компании на этой
                    странице. Здесь вы можете прочитать о нашей истории, узнать
                    о наших ценностях, и о том, как мы стремимся обеспечить
                    нашим клиентам только лучшие продукты и услуги.{" "}
                  </p>
                  <p>
                    Мы приглашаем вас узнать больше о нашей компании на этой
                    странице. Здесь вы можете прочитать о нашей истории, узнать
                    о наших ценностях, и о том, как мы стремимся обеспечить
                    нашим клиентам только лучшие продукты и услуги.{" "}
                  </p>
                  <p>
                    Мы приглашаем вас узнать больше о нашей компании на этой
                    странице. Здесь вы можете прочитать о нашей истории, узнать
                    о наших ценностях, и о том, как мы стремимся обеспечить
                    нашим клиентам только лучшие продукты и услуги.{" "}
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <Image src={spec1} alt="team" className="w-full object-cover" />
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="mt-8 h-12 md:mt-10 lg:mt-20">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              autoplay={{ delay: 200 }}
              loop
              speed={2000}
              className="h-full"
              breakpoints={{
                640: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 7,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 7,
                  spaceBetween: 50,
                },
                1440: {
                  slidesPerView: 9,
                  spaceBetween: 64,
                },
              }}
            >
              <SwiperSlide>
                <Image src={aegSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={boschSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={echoSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={efcoSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={fiskarsSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={husqvarnaSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={husqvarnaVikingSVG}
                  alt="brand"
                  className="h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={makitaSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={milwaukeeSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={oleomacSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={ryobiSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={wiloSVG} alt="brand" className="h-full" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={trheeMSVG} alt="brand" className="h-full" />
              </SwiperSlide>
            </Swiper>
          </div>
        </UiContainer>
      </UiSection>
      {/* Block About Us end */}
      <UiSection>
        <UiContainer>
          <UiTitle title="Магазин" />
          <div className="sm:py-5 md:py-10 xl:px-32 xl:py-32 2xl:px-44">
            <div className="sm:bg-spec-black-light sm:px-5 xl:px-60 ">
              <UiShopCat
                image={shop}
                title="Болгарки"
                desc=" Мы приглашаем вас узнать больше о нашей компании на этой"
                position="left"
              />
              <UiShopCat
                image={shop}
                title="Болгарки"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem iure molestiae laboriosam placeat cumque quisquam nostrum ducimus nam maxime dolore impedit, tempora quod libero iste suscipit id vero voluptas sed in sunt illo ipsa rerum expedita. Blanditiis iure repellendus deserunt accusantium enim officia quo, tempora aperiam autem voluptatibus molestias, labore unde accusamus voluptatem earum nulla. Dolor consequuntur obcaecati hic? Aspernatur ab impedit placeat, incidunt a qui reiciendis facere obcaecati, quidem itaque odit voluptates rem aperiam sit perspiciatis. Nobis blanditiis sit suscipit exercitationem odio! Praesentium nostrum, consequatur voluptatum repudiandae impedit unde officia autem fugit odio atque harum quaerat minima delectus adipisci!"
                position="right"
              />
              <UiShopCat
                image={shop}
                title="Болгарки"
                desc="Lorem ipsum !"
                position="left"
              />
              <UiShopCat
                image={shop}
                title="Болгарки"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem iure molestiae laboriosam placeat cumque quisquam nostrum ducimus nam maxime dolore impedit, tempora quod libero iste suscipit id vero voluptas sed in sunt illo ipsa rerum expedita. Blanditiis iure repellendus deserunt accusantium enim officia quo, tempora aperiam autem voluptatibus molestias, labore unde accusamus voluptatem earum nulla. Dolor consequuntur obcaecati hic? Aspernatur ab impedit placeat, incidunt a qui reiciendis facere obcaecati, quidem itaque odit voluptates rem aperiam sit perspiciatis. Nobis blanditiis sit suscipit exercitationem odio! Praesentium nostrum, consequatur voluptatum repudiandae impedit unde officia autem fugit odio atque harum quaerat minima delectus adipisci!"
                position="right"
              />
              <UiShopCat
                image={shop}
                title="{Болгарки}"
                desc=" Мы приглашаем вас узнать больше о нашей компании на этой"
                position="left"
              />
            </div>
          </div>
        </UiContainer>
      </UiSection>
    </main>
  );
}
