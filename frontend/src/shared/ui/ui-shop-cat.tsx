import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type IShopCat = {
  image: string | StaticImageData;
  title: string;
  desc: string;
  position: "left" | "right";
  className?: string;
};

export const UiShopCat = ({
  image,
  title,
  desc,
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
      <Image
        src={image}
        width={382}
        height={514}
        alt="Storefront"
        className={clsx(
          `w-full object-cover sm:h-[514px] sm:w-[382px] sm:flex-[1_2_0%] xl:absolute xl:-top-[80px]`,
          xPosition,
        )}
      />
      <div className="scroll-spec overflow-y-auto sm:h-[280px]  sm:flex-[2_2_0%]">
        <h3
          className={`mb-5 pr-1 ${
            position === "left" ? "sm:text-left" : "sm:text-right"
          } font-specTitle text-3xl font-bold tracking-wide text-spec-gold-light`}
        >
          {title}
        </h3>
        <p
          className={`text-spec-text-white pr-1 text-base ${
            position === "left" ? "sm:text-left" : "sm:text-right"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};
