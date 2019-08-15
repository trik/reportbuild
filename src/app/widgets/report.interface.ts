export interface Report {
  styles?: Object;
  header: WidgetContainer;
  content: WidgetContainer;
  footer: WidgetContainer;
};

export interface Widget {
  widgetType?: WT; // absent for header, content, footer
  visibility?: Visibility;
  styles?: Object;
}

// Implemented by header, content, footer, layout, column:
export interface WidgetContainer extends Widget {
  content: Widget[];
}

export interface Visibility {
    condition: string;
};

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

export interface Layout extends WidgetContainer {
  columns: number[];
};

export interface Image extends Widget {
  imageType: number;
  url?: Formula;
  flag?: Formula;
  icon?: Formula;
};

export interface Formula {
  formula: string;
};

export const IT = {
  Image: 0,
  Flag: 1,
  Icon: 2
};

export interface Text extends Widget {
  htmlText: string;
};

export interface Chart extends Widget {
  chartType: ChartType;
  labels: Formula;
  dataset: ChartData[];
  options: ChartOptions;
};

export enum ChartType {
  Line = 0,
  Bar,
  HorizontalBar,
  Radar,
  Scatter,
  Doughnut,
  Pie,
  PolarArea,
  Bubble
};

export interface ChartData {
  formula: Formula[];
  aggregation: Aggregation;
  label: string;
  // TODO: things missing
};

export interface ChartOptions {

};

export interface Table extends Widget {
  cellStyles?: any;
  dataset: TableData[][];
};

export interface TableData {
  formula: Formula;
  aggregation: Aggregation;
  label: string;
  colspan?: number;
  rowspan?: number;
  style?: any;
};

export interface Aggregation {
  aggregation: AggregationType;
};

export enum AggregationType {
  None = 0,
  Sum,
  Average,
  WeightedAverage
};

export interface Map extends Widget {
  coordinate: Formula;
  tileLayer: string;
  attribution: string;
  disabled: boolean;
};

export interface ImageContainer extends Widget {
  imageType: number;
  urls?: Formula;
  flags?: Formula;
  icons?: Formula;
};
