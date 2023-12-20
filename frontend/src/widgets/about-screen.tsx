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
import { About, ContentSection } from "@/shared/lib/types";
import { Company } from "@/entities/company";
import { Team } from "@/entities/team";
import { sectionAboutRenderer } from "./model";
import { getFullUrl } from "@/shared/lib/constants/helpers/helpers";

interface IAbout {
  data: ContentSection;
}

export function AboutScreen({ data }: IAbout) {
  const title1 = data.about[0];

  const section = data.about.map((section: About, index: number) =>
    sectionAboutRenderer(section, index),
  );
  return (
    <UiSection className="relative bg-spec-black-light" id="about">
      <UiContainer>
        {section}
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
            {data.slider.data.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={getFullUrl(item.attributes.url)}
                  alt={
                    item.attributes.alternativeText
                      ? item.attributes.alternativeText
                      : "brand"
                  }
                  width={item.attributes.width}
                  height={item.attributes.height}
                  className="h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </UiContainer>
    </UiSection>
  );
}
