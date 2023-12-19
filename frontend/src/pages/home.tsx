import { getPageBySlug } from "./model/model";
import { HomePageView } from "./ui/home-page";

export async function HomePage() {
  // try {
  const page = await getPageBySlug("main");
  // console.log('page', page.data[0].attributes)
  // if (page.error && page.error.status == 401)
  //   throw new Error(
  //     'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
  //   )
  // console.log('--------------page------------', page.data)
  if (page.data?.id) return <HomePageView data={page} />;
  // if (page.data.length === 0) return null
  // const contentSections = page.data[0].attributes.contentSections
  // return contentSections.map((section: any, index: number) =>
  //   sectionRenderer(section, index)
  // )
  // } catch (error: any) {
  //   window.alert('Missing or invalid credentials')
  // }
}
