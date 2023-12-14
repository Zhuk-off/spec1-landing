import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

type ISocialIcon = {
  href: string;
  ariaLabel: string;
  icon: ReactNode;
  className?: string;
};

export const UiSocialIcon = ({
  href,
  ariaLabel,
  icon,
  className,
}: ISocialIcon) => {
  return (
    <Link
      className={clsx('', className)}
      href={href}
      target={'_blank'}
      aria-label={ariaLabel}
    >
      {icon}
    </Link>
  );
};
