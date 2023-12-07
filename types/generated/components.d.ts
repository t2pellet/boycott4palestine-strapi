import type { Schema, Attribute } from '@strapi/strapi';

export interface SubsidiarySubsidiary extends Schema.Component {
  collectionName: 'components_subsidiary_subsidiaries';
  info: {
    displayName: 'Subsidiary';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    logo: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'subsidiary.subsidiary': SubsidiarySubsidiary;
    }
  }
}
