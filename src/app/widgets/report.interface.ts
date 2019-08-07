export interface Report {
  styles?: Object;
  header: Widget;
  content: Widget;
  footer: Widget;
};

export interface Widget {
  widgetType?: WT; // header, content, footer have undefined type
  visibility?: Visibility;
  styles?: Object;
  content?: Widget[];
}

export enum WT {
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

export interface Visibility {
    condition: string;
};
