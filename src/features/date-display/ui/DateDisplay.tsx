import styles from './DateDisplay.module.scss';

import { getDate } from '../model/index.ts';



export const DateDisplay = () => {

  const { localDate, dayOfWeek } = getDate();


  return (
    <div className={styles.container}>
      <p className={styles['day__text']}>
        {dayOfWeek.toUpperCase()}
      </p>
      <p className={styles['date__text']}>
        {localDate}
      </p>
    </div>
  );
}