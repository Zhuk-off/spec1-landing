import clsx from "clsx";
import Image from "next/image";
import { getFullUrl } from "../lib/constants/helpers/helpers";
import { Description } from "../lib/types";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";

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
        <Image
          src={getFullUrl(image.url)}
          alt={image.alt ? image.alt : ""}
          width={image.width}
          height={image.height}
          className="hidden h-[160px] w-[253px] rounded-3xl object-cover md:block xl:h-[320px] xl:w-[506px]"
        />
      </div>
      <div className="xl:flex-1">
        <h3 className="mb-3 max-w-2xl font-specTitle text-2xl font-bold uppercase text-spec-gold-light md:text-2xl lg:text-4xl">
          {title}
        </h3>
        <div className="max-w-2xl text-spec-text-white">
          <BlocksRenderer content={description as BlocksContent} />
        </div>
      </div>
    </div>
  );
};
