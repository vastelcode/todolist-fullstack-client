import styles from './styles.module.scss';

import { TaskLineChartI } from '@/shared/types/types.ts'

import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} 
from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const TaskLineChart = (
  {data, options = {} } : TaskLineChartI
) => {
  return (
    <div className={styles.chart}>
      <Line data={data} options={options}/>
    </div>
  );
}