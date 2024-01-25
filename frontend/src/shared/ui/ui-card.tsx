import clsx from "clsx";
import Image from "next/image";
import { getFullUrl } from "../lib/constants/helpers/helpers";
import { Description } from "../lib/types";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { StyledBlocksRenderer } from "@/entities/rich-text";

type ICard = {
  title: string;
  image: {
    alt: string | null;
    url: string;
    width: number;
    height: number;
  };
  description: Description[];
  className?: string;
};

export const UiCard = ({ title, description, image, className }: ICard) => {
  return (
    <div
      className={clsx("flex items-center md:gap-x-8 lg:gap-x-14", className)}
    >
      <div className="shrink-0 xl:flex-1">
        <div className="relative hidden h-[160px] w-[253px] object-cover md:block xl:h-[320px] xl:w-[506px]">
          <Image
            src={getFullUrl(image.url)}
            alt={image.alt ? image.alt : ""}
            // width={image.width}
            // height={image.height}
            fill
            className="object-cover md:rounded-2xl xl:rounded-3xl"
            // className="hidden h-[160px] w-[253px] rounded-3xl object-cover md:block xl:h-[320px] xl:w-[506px]"
          />
        </div>
      </div>
      <div className="xl:flex-1">
        <h3 className="mb-3 max-w-2xl font-specTitle text-2xl uppercase text-spec-gold-light md:text-2xl lg:text-4xl">
          {title}
        </h3>
        <div className="max-w-2xl text-spec-text-white">
          <StyledBlocksRenderer content={description as BlocksContent} />
        </div>
      </div>
    </div>
  );
};
