import clsx from 'clsx';
import { ReactNode } from 'react';


export function UiHeader({
  className,
  contacts,
  links,
  logo,
}: {
  className?: string;
  links?: ReactNode;
  contacts?: ReactNode;
  logo?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        'flex w-full justify-between py-3 px-6 pr-0 md:pr-6 ',
        className
      )}
    >
      {logo}
      {contacts}
      {links}
    </header>
  );
}
