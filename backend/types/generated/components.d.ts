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
      'menu.menu-item': MenuMenuItem;
      'menu.menu': MenuMenu;
      'widgets.header': WidgetsHeader;
    }
  }
}
