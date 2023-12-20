import { getFullUrl } from "@/shared/lib/constants/helpers/helpers";
import { About } from "@/shared/lib/types";
import { UiTitle } from "@/shared/ui/ui-title";
import Image from "next/image";

export function Company({ data }: { data: About }) {
  const { title, description, image } = data;
  const { alternativeText, url, height, width } = image.data.attributes;
  return (
    <div className="pt-5 md:px-0 md:pt-12">
      <div className="flex flex-col items-center gap-0 md:flex-row-reverse md:gap-5">
        <div className="flex-1 shadow-2xl md:px-7 md:py-14">
          <UiTitle title={title} />
          <div className="text-spec-text-white">{description}</div>
        </div>
        <div className="flex-1">
          <Image
            src={getFullUrl(url)}
            alt={alternativeText ? alternativeText : ""}
            height={height}
            width={width}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
