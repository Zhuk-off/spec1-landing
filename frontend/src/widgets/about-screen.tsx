import UiContainer from "@/shared/ui/layouts/ui-container";
import UiSection from "@/shared/ui/layouts/ui-section";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { ContentSection, InfoblockElement } from "@/shared/lib/types";
import { sectionAboutRenderer } from "./model";
import { getFullUrl } from "@/shared/lib/constants/helpers/helpers";

export function AboutScreen({ data }: { data: ContentSection }) {
  const section = Array.isArray(data.infoblock)
    ? data.infoblock.map((section: InfoblockElement, index: number) =>
        sectionAboutRenderer(section, index),
      )
    : sectionAboutRenderer(data.infoblock, 1);
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
            {data.slider &&
              data.slider.data.map((item, index) => (
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
