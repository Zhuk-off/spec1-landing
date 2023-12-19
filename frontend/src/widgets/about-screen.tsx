import UiContainer from "@/shared/ui/layouts/ui-container";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiTitle } from "@/shared/ui/ui-title";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export function AboutScreen() {
  return (
    <UiSection className="bg-spec-black-light relative" id="about">
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
              <Image src={husqvarnaVikingSVG} alt="brand" className="h-full" />
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
  );
}
