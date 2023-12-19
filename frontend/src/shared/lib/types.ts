export interface ResponseBackend {
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
    data: ImageData;
}

export interface ImageData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   string;
    caption:           null;
    width:             number;
    height:            number;
    formats:           null;
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

export interface Meta {
}