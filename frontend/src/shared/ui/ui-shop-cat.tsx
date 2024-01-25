import clsx from "clsx";
import Image from "next/image";
import { Description } from "../lib/types";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { StyledBlocksRenderer } from "@/entities/rich-text";

type IShopCat = {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: Description[];
  position: "left" | "right";
  className?: string;
};

export const UiShopCat = ({
  image,
  title,
  description,
  position = "left",
  className,
}: IShopCat) => {
  const xPosition =
    position === "left" ? "xl:-left-[415px]" : "xl:-right-[415px]";
  return (
    <div
      className={clsx(
        "relative flex flex-col-reverse gap-5 border-b-2 border-solid border-spec-gold-light py-10 last:border-transparent sm:flex-row sm:even:flex-row-reverse xl:pb-0 xl:pt-16",
        className,
      )}
    >
      <div
        className={clsx(
          `relative w-full h-[347px] overflow-hidden sm:h-[514px] sm:w-[382px] sm:flex-[1_2_0%] xl:absolute xl:-top-[80px]`,
          xPosition,
        )}
      >
        <Image
          src={image.url}
          // width={image.width}
          // height={image.height}
          fill
          alt={image.alt}
          // className={clsx(
          //   `w-full object-cover sm:h-[514px] sm:w-[382px] sm:flex-[1_2_0%] xl:absolute xl:-top-[80px]`,
          //   xPosition,
          // )}
          className="object-cover"
        />
      </div>
      <div className="scroll-spec overflow-y-auto sm:h-[280px]  sm:flex-[2_2_0%]">
        <h3
          className={`mb-5 pr-1 uppercase ${
            position === "left" ? "sm:text-left" : "sm:text-right"
          } font-specTitle text-3xl tracking-wide text-spec-gold-light`}
        >
          {title}
        </h3>
        <div
          className={`pr-1 text-base text-spec-text-white ${
            position === "left" ? "sm:text-left" : "sm:text-right"
          }`}
        >
          <StyledBlocksRenderer content={description as BlocksContent} />
        </div>
      </div>
    </div>
  );
};
