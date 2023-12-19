export interface Welcome {
    data: WelcomeData;
    meta: Meta;
}

export interface WelcomeData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    name:        string;
    Header:      Header;
    Menu:        Menu;
    imagemain:   Imagemain;
}

export interface Header {
    id:     number;
    name:   string;
    social: Social;
    logo:   Logo;
    email:  Email;
    phone:  Phone;
}

export interface Email {
    id:    number;
    email: string;
}

export interface Logo {
    id:    number;
    name:  string;
    alt:   string;
    link:  string;
    image: Image;
}

export interface Image {
    data: ImagemainData;
}

export interface ImagemainData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   null | string;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats | null;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Large;
    large:     Large;
    medium:    Large;
    small:     Large;
}

export interface Large {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export interface Phone {
    id:     number;
    number: string;
    link:   string;
}

export interface Social {
    id:       number;
    viber:    string;
    telegram: string;
}

export interface Menu {
    id:   number;
    name: string;
    item: Item[];
}

export interface Item {
    id:   number;
    name: string;
    link: string;
}

export interface Imagemain {
    id:        number;
    imagemain: Image;
}

export interface Meta {
}