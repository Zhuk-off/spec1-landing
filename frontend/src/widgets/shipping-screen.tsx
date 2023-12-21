import UiContainer from "@/shared/ui/layouts/ui-container";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiTitle } from "@/shared/ui/ui-title";
import Image from "next/image";
import { ContentSection } from "@/shared/lib/types";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getFullUrl } from "@/shared/lib/constants/helpers/helpers";

export function ShippingScreen({ data }: { data: ContentSection }) {
  const {
    title,
    greenprice,
    yellowprice,
    purpleprice,
    infoblock,
    description,
  } = data;

  return (
    <UiSection className="bg-spec-bg-black" id="ship">
      <UiContainer>
        <div className="relative flex lg:static lg:flex-row-reverse">
          <div className="relative z-10 max-w-2xl overflow-y-auto sm:px-5 lg:w-[500px] lg:px-0 lg:pt-20">
            <UiTitle title={title} className="text-white" />
            <div className="text-spec-text-white lg:max-h-12 lg:pl-28">
              {!Array.isArray(infoblock) && (
                <BlocksRenderer
                  content={infoblock.description as BlocksContent}
                />
              )}
            </div>
          </div>
          <div className="inline-block lg:relative lg:grow">
            {!Array.isArray(infoblock) && (
              <Image
                src={getFullUrl(infoblock.image.data.attributes.url)}
                alt={
                  infoblock.image.data.attributes.alternativeText
                    ? infoblock.image.data.attributes.alternativeText
                    : ""
                }
                width={infoblock.image.data.attributes.width}
                height={infoblock.image.data.attributes.height}
                className="absolute left-0 top-0 h-full w-full object-cover blur-sm brightness-50 lg:static lg:blur-0 lg:brightness-75 xl:h-[417px] xl:w-[941px] "
              />
            )}
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
          <div className="pt-8 text-spec-text-white sm:px-5 md:pt-10 lg:pr-16 lg:pt-16">
            <div className="max-w-2xl">
              {description && (
                <BlocksRenderer content={description as BlocksContent} />
              )}
            </div>
            <div className="flex flex-col gap-5 py-10 text-spec-text-white sm:flex-row lg:justify-between xl:flex-col 2xl:flex-row">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 shrink-0 rounded-full bg-green-500" />
                <div className="">{greenprice}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 shrink-0 rounded-full bg-green-300" />
                <div className="">{yellowprice}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 shrink-0 rounded-full bg-orange-300" />
                <div className="">{purpleprice}</div>
              </div>
            </div>
          </div>
        </div>
      </UiContainer>
    </UiSection>
  );
}
