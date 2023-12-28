import clsx from "clsx";

type ITitle = {
  title: string;
  className?: string;
};

export const UiTitle = ({ title, className }: ITitle) => {
  return (
    <h2
      className={clsx(
        "mb-5 mt-3 font-specTitle text-3xl font-bold uppercase text-spec-gold-light md:my-7 md:text-4xl xl:text-5xl",
        className,
      )}
    >
      {title}
    </h2>
  );
};
