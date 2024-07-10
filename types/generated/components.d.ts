import type { Schema, Attribute } from '@strapi/strapi';

export interface AttributesColor extends Schema.Component {
  collectionName: 'components_attributes_colors';
  info: {
    displayName: 'Color';
    description: '';
  };
  attributes: {
    color_attributes: Attribute.Relation<
      'attributes.color',
      'oneToMany',
      'api::attribute.attribute'
    >;
  };
}

export interface AttributesSize extends Schema.Component {
  collectionName: 'components_attributes_sizes';
  info: {
    displayName: 'size';
    icon: 'crop';
    description: '';
  };
  attributes: {
    size: Attribute.Enumeration<['S', 'M', 'L', 'XL']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'attributes.color': AttributesColor;
      'attributes.size': AttributesSize;
    }
  }
}
