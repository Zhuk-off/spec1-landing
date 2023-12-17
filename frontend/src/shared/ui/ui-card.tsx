import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type ICard = {
  title: string;
  image: string | StaticImageData;
  desc: string;
  className?: string;
};

export const UiCard = ({ title, desc, image, className }: ICard) => {
  return (
    <div
      className={clsx("flex items-center md:gap-x-8 lg:gap-x-14", className)}
    >
      <div className="shrink-0 xl:flex-1">
        <Image
          src={image}
          alt="Installment"
          width={506}
          height={320}
          className="hidden h-[160px] w-[253px] rounded-3xl object-cover md:block xl:h-[320px] xl:w-[506px]"
        />
      </div>
      <div className="xl:flex-1">
        <h3 className="mb-3 max-w-2xl font-specTitle text-2xl font-bold uppercase text-spec-gold-light md:text-2xl lg:text-4xl">
          {title}
        </h3>
        <div className="text-spec-text-white max-w-2xl">{desc}</div>
      </div>
    </div>
  );
};
