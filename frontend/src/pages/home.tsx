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
import card1 from "/public/cards/card1.png";
import shippingImg from "/public/shipping.jpg";
import shipping2Img from "/public/shipping2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { UiTitle } from "@/shared/ui/ui-title";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiShopCat } from "@/shared/ui/ui-shop-cat";
import { UiCard } from "@/shared/ui/ui-card";
import { UiMenuItem } from "@/shared/ui/ui-menu-item";

const menuMock = [
  {
    text: "Главная",
    link: "/",
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
    link: "#",
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
          <UiMenu
            menuData={menuMock}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
        </UiContainer>
      </div>

      {/* Central image and filters start  */}
      {/* <div className="w-full">
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
      <div className="from-spec-black-light h-8 bg-gradient-to-t to-black md:h-20"></div> */}
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

      {/* Block Storefront start */}
      {/* <UiSection>
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
      </UiSection> */}
      {/* Block Storefront end */}

      {/* Block Installment start */}
      {/* <UiSection className="bg-spec-black-light">
        <UiContainer>
          <UiTitle title="Рассрочка" />
          <div className="text-spec-text-white flex flex-col gap-5 md:flex-row md:gap-8 lg:gap-14">
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              reprehenderit eveniet alias quasi! Exercitationem, blanditiis?
              Temporibus a perspiciatis quasi at non voluptas assumenda atque
              distinctio eum, omnis repellat inventore voluptate voluptatum
              ducimus beatae, obcaecati consequuntur esse minima necessitatibus
              cum accusantium libero ipsum numquam? Ut, vero enim minus eaque{" "}
            </div>
            <div className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
              eligendi pariatur saepe laboriosam provident consectetur, suscipit
              cum voluptatem nesciunt consequatur quia et maiores laborum
              placeat? Alias laborum officiis rerum, temporibus facilis dolore
              saepe magni excepturi, nam quae nisi distinctio aspernatur odit
              iste dolores tempore rem at quos voluptate! Quia, perspiciatis.
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-12 sm:mt-20 lg:px-6">
            <UiCard
              title={"Халва - 2 мес "}
              image={shop}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, distinctio sint, reprehenderit similique reiciendis atque dicta aliquid dolore harum necessitatibus tenetur repellendus mollitia? Nam veritatis explicabo pariatur atque veniam ad illo repudiandae provident deleniti ex, laudantium quis architecto doloremque inventore velit incidunt, accusantium non ipsam nemo delectus magnam. Animi!"
              }
            />

            <UiCard
              title={"Халва - 2 мес "}
              image={card1}
              desc={
                "Мы приглашаем вас узнать больше о нашей компании на этой странице. Здесь вы можете прочитать о нашей истории, узнать о наших ценностях, и о том, как мы стремимся обеспечить нашим клиентам предложений."
              }
            />
            <UiCard
              title={"Халва - 2 мес "}
              image={card1}
              desc={
                "Мы приглашаем вас узнать больше о нашей компании на этой странице. Здесь вы можете прочитать о нашей истории, узнать о наших ценностях, и о том, как мы стремимся обеспечить нашим клиентам предложений."
              }
            />
          </div>
        </UiContainer>
      </UiSection> */}
      {/* Block Installment end */}

      {/* Block Installment start */}
      <UiSection className="bg-spec-bg-black">
        <UiContainer>
          <div className="relative flex lg:static lg:flex-row-reverse">
            <div className="relative z-10 max-w-2xl overflow-y-auto sm:px-5 lg:w-[500px] lg:px-0 lg:pt-20">
              <UiTitle title="Доставка" className="text-white" />
              <div className="text-spec-text-white lg:max-h-12 lg:pl-28">
                Мы приглашаем вас узнать больше о нашей компании на этой
                странице. Здесь вы можете прочитать о нашей испрочитать
                обеспечить нашим клиене о нашей компании на этой странице. Здесь
                вы можете прочитать о нашей испрочитать обеспечить нашим клиене
                о нашей компании на этой странице. Здесь вы можете прочитать о
                нашей испрочитать обеспечить нашим клиене о нашей компании на
                этой странице. Здесь вы можете прочитать о нашей испрочитать
                обеспечить нашим клиен
              </div>
            </div>
            <div className="inline-block lg:relative lg:grow">
              <Image
                src={shipping2Img}
                alt="shipping"
                width={941}
                height={417}
                className="absolute left-0 top-0 h-full w-full object-cover blur-sm brightness-50 lg:static lg:blur-0 lg:brightness-75 xl:h-[417px] xl:w-[941px] "
              />
              <div className="-right-16 top-16  hidden h-64 w-32 bg-spec-gold-light-hover md:absolute lg:block"></div>
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row-reverse">
            <div className="relative z-10 md:flex lg:flex-col ">
              <div className="h-[300px] w-full xl:h-[510px] xl:w-[665px]">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A95c018a5507136176c98d9ee0a632fade4d528545272dde86407233c86084742&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
            <div className="text-spec-text-white pt-8 sm:px-5 md:pt-10 lg:pr-16 lg:pt-16">
              <div className="max-w-2xl">
                Мы приглашаем вас узнать больше о нашей компании на этой
                странице. Здесь вы можете прочитать о нашей истории, узнать о
                наших ценностях, и о том, как мы стремимся обеспечить нашим
                клиенМы приглашаем вас узнать больше о нашей компании на этой
                странице. Здесь вы можете прочитать о нашей истории, узнать о
                наших ценностях, и о том, как мы стремимся обеспечить нашим
                клиенМы приглашаем вас узнать больше о нашей компании на этой
                странице. Здесь вы можете прочитать о нашей истории, узнать о
                наших ценностях, и о том, как мы стремимся обеспечить нашим
                клиенМы приглашаем вас узнать больше о нашей компании на этой
                странице. Здесь вы можете прочитать о нашей истории, узнать о
                наших ценностях, и о том, как мы стремимся обеспечить нашим
                клиен
              </div>
              <div className="text-spec-text-white flex flex-col gap-5 py-10 sm:flex-row lg:justify-between xl:flex-col 2xl:flex-row">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-green-500" />
                  <div className="">Бесплатно от 200 руб</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-green-300" />
                  <div className="">50 руб (до 50 км)</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-orange-300" />
                  <div className="">100 руб (до 100 км)</div>
                </div>
              </div>
            </div>
          </div>
        </UiContainer>
      </UiSection>
      {/* Block Installment end */}

      {/* Block Contacts start */}
      <UiSection className="bg-spec-black-light relative">
        <UiContainer>
          <div className="flex flex-col gap-5 md:flex-row md:gap-6 lg:gap-12">
            <div className="flex-1">
              <UiTitle title="Контакты" className="" />
              <div className="text-spec-text-white">
                Мы приглашаем вас узнать больше о нашей компании на этой
                странице. Здесь вы можете прочитать о нашей истории, узнать о
                наших ценностях, и о том, как мы стремимся обеспечить нашим
                клиентам предложений.Мы приглашаем вас узнать больше о нашей
                компании на этой странице. Здесь вы можете прочитать о нашей
                истории, узнать о наших ценностях, и о том, как мы стремимся
                обеспечить нашим клиентам предложений.Мы приглашаем вас узнать
                больше о нашей компании на этой странице. Здесь вы можете
                прочитать о нашей истории, узнать о наших ценностях, и о том,
                как мы стремимся обеспечить нашим клиентам предложений.Мы
                приглашаем вас узнать больше о нашей компании на этой странице.
                Здесь вы можете прочитать о нашей истории, узнать о наших
                ценностях, и о том, как мы стремимся обеспечить нашим клиентам
                предложений.
              </div>
            </div>
            <div className="flex-1 border-2 border-spec-gold-light drop-shadow-2xl  sm:border-4">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad8090b9cadff833f2b0375b6429af50028aee1c120167fee2c8e13eba3a4e119&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </UiContainer>
      </UiSection>
      {/* Block Contacts end */}

      {/* Block Footer start */}
      <footer className="bg-spec-bg-black px-3 pt-10 sm:px-6 sm:pt-20 md:px-10 md:pt-20 lg:pt-24">
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
                  {menuMock.map((item, index) => (
                    <li key={index} className="">
                      <UiMenuItem
                        href={item.link}
                        text={item.text}
                        setOpenMenu={setOpenMenu}
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
      {/* Block Footer end */}
    </main>
  );
}
