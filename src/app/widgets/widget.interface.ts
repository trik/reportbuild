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

// toObject() | json is used to serialize the report and its widgets.
export interface ToObject {
  toObject(): any;
};

export interface Widget extends ToObject {

};
