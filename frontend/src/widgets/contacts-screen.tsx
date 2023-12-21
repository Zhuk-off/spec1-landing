import { StyledBlocksRenderer } from "@/entities/rich-text";
import { ContentSection } from "@/shared/lib/types";
import UiContainer from "@/shared/ui/layouts/ui-container";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiTitle } from "@/shared/ui/ui-title";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export function ContactsScreen({ data }: { data: ContentSection }) {
  const { title, infoblock } = data;
  return (
    <UiSection className="relative bg-spec-black-light" id="contact">
      <UiContainer>
        <div className="flex flex-col gap-5 md:flex-row md:gap-6 lg:gap-12">
          <div className="flex-1">
            <UiTitle title={title} className="" />
            <div className="text-spec-text-white">
              {Array.isArray(infoblock) &&
                infoblock.map((item, index) => {
                  return (
                    <StyledBlocksRenderer
                      key={index}
                      content={item.description as BlocksContent}
                    />
                  );
                })}
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
  );
}
