import { Chart as ChartJS, ChartData, ChartOptions } from 'chart.js';


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
}




export type PeriodType = 'day' | 'week' | 'month';

export interface PeriodI {
  activePeriod: PeriodType;
  onClickPeriod: Function;
}

export interface TaskLineChartI {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
}

