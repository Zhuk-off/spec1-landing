import UiContainer from "@/shared/ui/layouts/ui-container";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiCard } from "@/shared/ui/ui-card";
import { UiTitle } from "@/shared/ui/ui-title";
import { ContentSection } from "@/shared/lib/types";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export function InstallmentScreen({ data }: { data: ContentSection }) {
  console.log("data---", data);
  const { title, infoblock } = data;
  const description1 = data.description1;
  const description2 = data.description2;
  return (
    <UiSection className="bg-spec-black-light" id="installment">
      <UiContainer>
        <UiTitle title={title} />
        <div className="flex flex-col gap-5 text-spec-text-white md:flex-row md:gap-8 lg:gap-14">
          <div className="flex-1">
            {description1 && (
              <BlocksRenderer content={description1 as BlocksContent} />
            )}
          </div>
          <div className="flex-1">
            {description2 && (
              <BlocksRenderer content={description2 as BlocksContent} />
            )}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-12 sm:mt-20 lg:px-6">
          {Array.isArray(infoblock) ? (
            infoblock.map((item, index) => {
              const { alternativeText, url, height, width } =
                item.image.data.attributes;
              return (
                <UiCard
                  key={index}
                  title={item.title}
                  image={{
                    alt: alternativeText,
                    url: url,
                    height: height,
                    width: width,
                  }}
                  description={item.description}
                />
              );
            })
          ) : (
            <UiCard
              title={infoblock.title}
              image={{
                alt: infoblock.image.data.attributes.alternativeText,
                url: infoblock.image.data.attributes.url,
                height: infoblock.image.data.attributes.height,
                width: infoblock.image.data.attributes.width,
              }}
              description={infoblock.description}
            />
          )}
        </div>
      </UiContainer>
    </UiSection>
  );
}
