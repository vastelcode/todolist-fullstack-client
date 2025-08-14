import { Chart as ChartJS, ChartData, ChartOptions } from 'chart.js';

export type PeriodType = 'day' | 'week' | 'month';

export interface PeriodI {
  activePeriod: PeriodType;
  onClickPeriod: Function;
}

export interface TaskLineChartI {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
}
