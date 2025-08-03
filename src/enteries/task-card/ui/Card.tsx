import styles from './Card.module.scss';

// импорт типов
import { CardI, statusLabels, priorityLables } from '../model/types/index.ts';

export const TaskCard = (
  {
    status,
    priority,
    header,
    descript,
    createdOn,
    src
  }
  : CardI
) => {

  const bgStatus = 
  status === 'completed' ? '#05A301' :
  status === 'in-progress' ? '#0225FF' : '#F21E1E';

  const bgPriority =
  priority === 'extreme' ? '#F21E1E' :
  priority === 'moderate' ? '#0225FF' : '#05A301'

  return (
    <div className={styles.card}>
      <div className={styles['card__content']}>

        <div className={`${styles['card__head']} items-center`}>
          <div 
          className={styles['card__circle']}
          style={{
            backgroundColor: bgStatus
          }}
          ></div>
          <p className={styles['card__header']}>
            {header}
          </p>
        </div>

        <div 
        className={`${styles['card__text']} pl-6 gap-2`}
        >
          <p className={styles['card__descript']}>
            {descript}
          </p>
          <img src={src} alt="изображение задачи" className={styles['card__img']} />
        </div>

        <div 
        className={styles['card__info']}
        >
          <p className={styles['card__label']}>
            Приоритет: <span style={{color: bgPriority}}>{priorityLables[priority]}</span>
          </p>

          <p className={styles['card__label']}>
            Статус: <span style={{color: bgStatus}}>{statusLabels[status]}</span>
          </p>

          <p className={`${styles['card__label']} ${styles['card__label_gray']}`}>
           Создано: {createdOn}
          </p>
        </div>

      </div>
    </div>
  );
}