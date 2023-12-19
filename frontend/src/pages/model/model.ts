import { Welcome } from "@/shared/lib/types";
import qs from "qs";

export async function getPageBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/${slug}`;
  const urlParamsObject = {
    populate: [
      "Header",
      "Header.phone",
      "Header.email",
      "Header.logo",
      "Header.logo.image",
      "Header.social",
      "Menu",
      "Menu.item",
      "imagemain.imagemain",

      
    ],
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
