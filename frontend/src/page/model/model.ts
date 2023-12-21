import { Welcome } from "@/shared/lib/types";
import { Metadata, ResolvingMetadata } from "next";
import qs from "qs";

export default async function getPageBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/${slug}`;
  const urlParamsObject = {
    populate: {
      Header: { populate: ["social", "phone", "email", "logo", "logo.image"] },
      footer: { populate: ["logo", "logo.image", "phone", "email", "social"] },
      seo: { populate: "*" },
      Menu: { populate: ["item"] },
      imagemain: {
        populate: ["imagemain"],
      },
      contentSections: {
        on: {
          "sections.about": {
            populate: ["slider", "infoblock.image"],
          },
          "sections.shop": {
            populate: ["infoblock.image"],
          },
          "sections.installment": {
            populate: ["infoblock.image"],
          },
          "sections.shipping": {
            populate: ["infoblock.image"],
          },
          "sections.contacts": {
            populate: ["infoblock.image"],
          },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {},
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`,
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data: Welcome = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    );
  }
}

export async function generateMeta(): Promise<Metadata> {
  const page = await getPageBySlug("main");
  if (page.data?.id)
    return {
      title: page.data.attributes.seo.title,
      description: page.data.attributes.seo.description,
      robots: page.data.attributes.seo.robots,
      alternates: {
        canonical: page.data.attributes.seo.canonical,
      },
    } as Metadata;
  return {
    title: "Спец 1",
    description: "",
  };
}
