import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import Image from 'next/image';
import { ROUTER_PATHS } from '../lib/constants/routes';

type ILogo = {
  logoUrl: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UiLogo = ({ logoUrl, className }: ILogo) => {
  return (
    <Link href={ROUTER_PATHS.HOME_PAGE} className={clsx(className, 'hover:scale-105')}>
      <Image src={logoUrl} alt="logo" width={180} height={70} className='md:hover:scale-[101%] transition-transform' />
    </Link>
  );
};
