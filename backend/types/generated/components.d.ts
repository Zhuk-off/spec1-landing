import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactEmail extends Schema.Component {
  collectionName: 'components_contact_emails';
  info: {
    displayName: 'Email';
    icon: 'envelop';
  };
  attributes: {
    email: Attribute.Email &
      Attribute.Required &
      Attribute.DefaultTo<'8347347@gmail.com'>;
  };
}

export interface ContactPhone extends Schema.Component {
  collectionName: 'components_contact_phones';
  info: {
    displayName: 'phone';
    icon: 'phone';
    description: '';
  };
  attributes: {
    number: Attribute.String & Attribute.Required;
    link: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'tel:+375298347347'>;
  };
}

export interface ContactSocial extends Schema.Component {
  collectionName: 'components_widgets_socials';
  info: {
    displayName: 'social';
    icon: 'book';
    description: '';
  };
  attributes: {
    viber: Attribute.String &
      Attribute.DefaultTo<'viber://chat?number=+375298347347'>;
    telegram: Attribute.String &
      Attribute.DefaultTo<'https://t.me/+375298347347'>;
  };
}

export interface LogoLogo extends Schema.Component {
  collectionName: 'components_logo_logos';
  info: {
    displayName: 'Logo';
    icon: 'magic';
  };
  attributes: {
    name: Attribute.String & Attribute.DefaultTo<'Logo-1'>;
    alt: Attribute.String & Attribute.Required & Attribute.DefaultTo<'logo'>;
    link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface LogoMainImage extends Schema.Component {
  collectionName: 'components_logo_main_images';
  info: {
    displayName: 'Main-image';
  };
  attributes: {
    imagemain: Attribute.Media & Attribute.Required;
  };
}

export interface MenuMenuItem extends Schema.Component {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'Menu-item';
    icon: 'layer';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0413\u043B\u0430\u0432\u043D\u0430\u044F'>;
    link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'#main'>;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
    icon: 'filter';
  };
  attributes: {
    name: Attribute.String & Attribute.DefaultTo<'Header menu'>;
    item: Attribute.Component<'menu.menu-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 4;
      }>;
  };
}

export interface SectionsAbout extends Schema.Component {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    infoblock: Attribute.Component<'shared.block', true> &
      Attribute.SetMinMax<{
        max: 2;
      }>;
    slider: Attribute.Media;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsContacts extends Schema.Component {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contacts';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    infoblock: Attribute.Component<'shared.block', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface SectionsInstallment extends Schema.Component {
  collectionName: 'components_sections_installments';
  info: {
    displayName: 'Installment';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description1: Attribute.Blocks & Attribute.Required;
    description2: Attribute.Blocks & Attribute.Required;
    infoblock: Attribute.Component<'shared.block', true>;
  };
}

export interface SectionsShipping extends Schema.Component {
  collectionName: 'components_sections_shippings';
  info: {
    displayName: 'Shipping';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    infoblock: Attribute.Component<'shared.block'> & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
    greenprice: Attribute.String & Attribute.Required;
    yellowprice: Attribute.String & Attribute.Required;
    purpleprice: Attribute.String & Attribute.Required;
  };
}

export interface SectionsShop extends Schema.Component {
  collectionName: 'components_sections_shops';
  info: {
    displayName: 'Shop';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    infoblock: Attribute.Component<'shared.block', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 3;
      }>;
  };
}

export interface SharedBlock extends Schema.Component {
  collectionName: 'components_shared_blocks';
  info: {
    displayName: 'block';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media & Attribute.Required;
    idname: Attribute.String & Attribute.Required;
  };
}

export interface WidgetsFooter extends Schema.Component {
  collectionName: 'components_widgets_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    working: Attribute.String;
    address: Attribute.String;
    logo: Attribute.Component<'logo.logo'> & Attribute.Required;
    phone: Attribute.Component<'contact.phone'> & Attribute.Required;
    email: Attribute.Component<'contact.email'> & Attribute.Required;
    social: Attribute.Component<'contact.social'> & Attribute.Required;
  };
}

export interface WidgetsHeader extends Schema.Component {
  collectionName: 'components_widgets_headers';
  info: {
    displayName: 'header';
    icon: 'expand';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.DefaultTo<'Header'>;
    phone: Attribute.Component<'contact.phone'> & Attribute.Required;
    email: Attribute.Component<'contact.email'> & Attribute.Required;
    logo: Attribute.Component<'logo.logo'> & Attribute.Required;
    social: Attribute.Component<'contact.social'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.email': ContactEmail;
      'contact.phone': ContactPhone;
      'contact.social': ContactSocial;
      'logo.logo': LogoLogo;
      'logo.main-image': LogoMainImage;
      'menu.menu-item': MenuMenuItem;
      'menu.menu': MenuMenu;
      'sections.about': SectionsAbout;
      'sections.contacts': SectionsContacts;
      'sections.installment': SectionsInstallment;
      'sections.shipping': SectionsShipping;
      'sections.shop': SectionsShop;
      'shared.block': SharedBlock;
      'widgets.footer': WidgetsFooter;
      'widgets.header': WidgetsHeader;
    }
  }
}
