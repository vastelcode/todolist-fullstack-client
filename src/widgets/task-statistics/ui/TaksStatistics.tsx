import styles from './styles.module.scss';

import { useState } from 'react';

import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store/index.ts";

import { PeriodType } from '../model/types.ts';

import { getOptions } from '../model/helpers.ts';

import { DATA_DAY, OPTIONS_CHART, DATA_WEEK, DATA_MONTH } from '../model/fake-data.ts';

import { PeriodSelector } from './PeriodSelector.tsx';

import { TaskLineChart } from './TasksLineChart.tsx';

export const TaskStatistics = () => {

  const theme = useSelector((state: RootState) => state.theme.mode);

  const colorGridY = 
  theme === 'dark' ? '#212329' : '#E7EBEC';

  const options = getOptions('Montserrat',colorGridY);

  const [period, setPeriod] = useState<PeriodType>('day');

  const data = 
  period === 'day' ? DATA_DAY :
  period === 'week' ? DATA_WEEK : DATA_MONTH;

  const handleClickPeriod = (newPeriod: PeriodType) => {
    setPeriod(newPeriod);
  }
  return (
    // основной контейнер
    <section className={styles.container}>
      {/* ограничивающий блок */}
      <div className={styles.content}>
        {/* шапка компонента */}
        <div className={styles.header}>
          <p className={styles['main-text']}>
            Активность
          </p>
          <PeriodSelector
          activePeriod={period}
          onClickPeriod={handleClickPeriod}
          />
        </div>
        {/* графическая часть компонента */}
        <TaskLineChart
        data={data}
        options={options}
        />
      </div>
    </section>
  );
}