export enum WidgetType {
	Layout = 0,
  PageBreak,
  Image,
  Text,
  Chart,
  Table,
  Map,
  Column,
  Formula,
  ImageContainer
};

export const WidgetName = [
  'Layout',
  'Page Break',
  'Image',
  'Text',
  'Chart',
  'Table',
  'Map',
  'Column',
  'Formula',
  'Image Container'
];

export interface Widget {
  toObject(): any;
};
