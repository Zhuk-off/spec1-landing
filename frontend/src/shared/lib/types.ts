export interface Welcome {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  name: string;
  Menu: Menu;
  Header: Header;
  imagemain: Imagemain;
  contentSections: ContentSection[];
}

export interface Header {
  id: number;
  name: string;
  social: Social;
  phone: Phone;
  email: Email;
  logo: Logo;
}

export interface Email {
  id: number;
  email: string;
}

export interface Logo {
  id: number;
  name: string;
  alt: string;
  link: string;
  image: Image;
}

export interface Image {
  data: DAT;
}

export interface DAT {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  name: string;
  alternativeText: null | string;
  caption: null;
  width: number;
  height: number;
  formats: Formats | null;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: Provider;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  Jpg = ".jpg",
  SVG = ".svg",
  Webp = ".webp",
}

export interface Formats {
  thumbnail: Large;
  medium: Large;
  small: Large;
  large?: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImageSVGXML = "image/svg+xml",
  ImageWebp = "image/webp",
}

export enum Provider {
  Local = "local",
}

export interface Phone {
  id: number;
  number: string;
  link: string;
}

export interface Social {
  id: number;
  viber: string;
  telegram: string;
}

export interface Menu {
  id: number;
  name: string;
  item: Item[];
}

export interface Item {
  id: number;
  name: string;
  link: string;
}

export interface ContentSection {
  id: number;
  __component: string;
  slider: Slider;
  about: About[];
}

export interface About {
  id: number;
  title: string;
  description: string;
  idname: string;
  image: Image;
}

export interface Slider {
  data: DAT[];
}

export interface Imagemain {
  id: number;
  imagemain: Image;
}

export interface Meta {}
