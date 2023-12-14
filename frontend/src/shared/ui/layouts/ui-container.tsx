import clsx from 'clsx';
import { ReactNode } from 'react';

export default function UiContainer({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        ' relative mx-auto px-2 max-w-[1440px]',
        className
      )}
    >
      {children}
    </div>
  );
}
