import { getFullUrl } from "@/shared/lib/constants/helpers/helpers";
import { InfoblockElement } from "@/shared/lib/types";
import { UiTitle } from "@/shared/ui/ui-title";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { StyledBlocksRenderer } from "./rich-text";

export function Team({ data }: { data: InfoblockElement }) {
  const { title, description, image } = data;
  const { alternativeText, url, height, width } = image.data.attributes;
  return (
    <div className="relative mt-2 flex min-h-[300px] md:px-0 lg:mt-10">
      <div className="relative z-10 flex w-full flex-col md:w-1/2 ">
        <UiTitle title={title} />
        <div className="text-spec-text-white">
          <StyledBlocksRenderer content={description as BlocksContent} />
        </div>
      </div>
      <div className="absolute left-0 top-1/2 z-0 max-h-full min-h-[200px] w-full -translate-y-1/2 overflow-hidden md:left-1/3 md:w-2/3">
        <div className="absolute inset-0 z-0 bg-spec-black-light/50 backdrop-blur-sm md:bg-spec-black-light/0 md:backdrop-blur-0"></div>
        <div className="absolute inset-0 w-1/2 bg-gradient-to-l from-transparent to-spec-black-light"></div>
        <div className="absolute bottom-0 left-1/2 right-0 top-0 w-1/2 bg-gradient-to-r from-transparent to-spec-black-light"></div>
        <Image
          src={getFullUrl(url)}
          alt={alternativeText ? alternativeText : ""}
          height={height}
          width={width}
          className="h-full w-full object-cover xl:max-h-[500px]"
        />
      </div>
    </div>
  );
}
