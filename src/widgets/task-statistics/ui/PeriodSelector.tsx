import styles from './styles.module.scss';

import { PeriodI } from '@/shared/types/types.ts';

export const PeriodSelector = (
  { activePeriod, onClickPeriod } : PeriodI
) => {

  // условия
  const isDay = activePeriod === 'day';
  const isWeek = activePeriod === 'week';
  const isMonth = activePeriod === 'month';

  return (
    <div className={`flex gap-10 ${styles['wrapper_period']}`}>
      {/* период */}
      <div 
      className={`${styles.period} ${isDay ? styles['period_active'] : null}`}
      onClick={() => onClickPeriod('day')}
      >
        <a className={styles.text}>
          День
        </a>
      </div>

      {/* период */}
      <div 
      className={`${styles.period} ${isWeek ? styles['period_active'] : null}`}
      onClick={() => onClickPeriod('week')}
      >
        <a className={styles.text}>
          Неделя
        </a>
      </div>


      {/* период */}
      <div 
      className={`${styles.period} ${isMonth ? styles['period_active'] : null}`}
      onClick={() => onClickPeriod('month')}
      >
        <a className={styles.text}>
          Месяц
        </a>
      </div>            
    </div>
  );
}