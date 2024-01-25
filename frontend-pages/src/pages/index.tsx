import { Inter } from 'next/font/google';
import getPageBySlug from '@/lib/model';
import { Welcome } from '@/lib/types';
import { useState } from 'react';
import localFont from 'next/font/local';
import sectionRenderer from '@/pages-fsd/model/section-renderer';
import clsx from 'clsx';
import { MainScreen } from '@/widgets/main-screen';
import { UiFooter } from '@/shared/ui/ui-footer';
import { getFullUrl } from '@/shared/lib/constants/helpers/helpers';

/* Connect the fonts start*/
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const citynova = localFont({
  src: '../shared/fonts/a_citynova_bold.ttf',
  display: 'block',
  variable: '--font-citynova',
});
/* Connect the fonts end*/

export default function Home({ res }: { res: Welcome }) {
  const [openMenu, setOpenMenu] = useState(false);
  const dataRes = res.data.attributes;
  const header = dataRes.Header;
  const menu = dataRes.Menu.item;
  const { address, copyright, email, logo, phone, social, working } =
    dataRes.footer;
  const mainImage = {
    url:
      process.env.NEXT_PUBLIC_STRAPI_API_URL +
      dataRes.imagemain.imagemain.data.attributes.url,
    alt: dataRes.imagemain.imagemain.data.attributes.alternativeText,
    width: dataRes.imagemain.imagemain.data.attributes.width,
    height: dataRes.imagemain.imagemain.data.attributes.height,
  };
  const section = dataRes.contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );
  // console.log('mainImage Url', mainImage.url);

  return (
    <main
      className={clsx(
        'relative min-h-full bg-scroll',
        openMenu && 'h-screen overflow-hidden',
        inter.variable,
        citynova.variable
      )}
      style={{ backgroundImage: "url('background.webp')" }}
    >
      <MainScreen
        header={header}
        menu={menu}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        mainImage={mainImage}
      />

      {section}

      <UiFooter
        logoImg={getFullUrl(logo.image.data.attributes.url)}
        menu={menu}
        address={address}
        working={working}
        phone={phone.number}
        phoneLink={phone.link}
        mail={email.email}
        viberLink={social.viber}
        telegramLink={social.telegram}
        copyright={copyright}
      />
    </main>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  const res = await getPageBySlug('main');

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      res,
    },
  };
}
