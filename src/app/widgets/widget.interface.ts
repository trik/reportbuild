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
  ImageContainer,
  LENGTH
};

export interface Widget {
  toObject(): any;
};
