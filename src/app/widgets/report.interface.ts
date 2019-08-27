import { AjfAggregationType, AjfChartDataset, AjfTableDataset } from '@ajf/core/reports';

export function emptyChartData(): AjfChartDataset {
  return {
    formula: [{formula: ''}],
    aggregation: {aggregation: 0},
    label: ''
  };
}

export function emptyTableCell(): AjfTableDataset {
  return {
    label: '',
    formula: {formula: ''},
    aggregation: {aggregation: AjfAggregationType.None},
    colspan: 1,
    rowspan: 1,
    style: {},
  };
}
