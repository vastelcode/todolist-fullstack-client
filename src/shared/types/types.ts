export type PriorityT = 'low' | 'medium' | 'high';

export interface Task {
  project: string;
  cover: string;
  header:string;
  text: string;
  date:string;
  points: number;
  priority: PriorityT;
}

export interface TaskColumnHeaderI {
  priority: PriorityT;
  amount: number;
};

export interface TaskColumnI {
  tasks : Task[];
  priority: PriorityT;
};


export type FilterTaskI = Partial<Record<keyof Task, string | number>>;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export type PointsType = number;
export interface LevelI {
  name: string;
  threshold: number;
  description: string;
}
export interface UserLevelProgressProps {
  points: PointsType;
  levels: LevelI[];
}
export interface LevelInfoProps {
  currentLevel: LevelI;
  nextLevel: LevelI | undefined;
  progressToNextLevel: number;
} 

export interface ProgressDataI {
  icon: string;
  header: string;
  amount: number;
}

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