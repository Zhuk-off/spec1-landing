import UiContainer from "@/shared/ui/layouts/ui-container";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiShopCat } from "@/shared/ui/ui-shop-cat";
import { UiTitle } from "@/shared/ui/ui-title";
import { ContentSection } from "@/shared/lib/types";

export function StorefrontScreen({ data }: { data: ContentSection }) {
  const { title, infoblock } = data;
  return (
    <UiSection id="shop">
      <UiContainer>
        <UiTitle title={title} />
        <div className="sm:py-5 md:py-10 xl:px-32 xl:py-32 2xl:px-44">
          <div className="sm:bg-spec-black-light sm:px-5 xl:px-60 ">
            {Array.isArray(infoblock) ? (
              infoblock.map((item, index) => (
                <UiShopCat
                  key={index}
                  image={{
                    url: item.image.data.attributes.url,
                    alt: item.image.data.attributes.alternativeText,
                  }}
                  title={item.title}
                  desc={item.description}
                  position={index % 2 == 0 ? "left" : "right"}
                />
              ))
            ) : (
              <UiShopCat
                image={{
                  url: infoblock.image.data.attributes.url,
                  alt: infoblock.image.data.attributes.alternativeText,
                }}
                title={infoblock.title}
                desc={infoblock.description}
                position="left"
              />
            )}
          </div>
        </div>
      </UiContainer>
    </UiSection>
  );
}
