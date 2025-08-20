
// импорт стилей
import styles from './styles.module.scss';

// импорт типов
import { TaskColumnHeaderI } from '@/shared/types/types.ts';

// импорт хелперов
import { getPriorityConfig } from '@/shared/lib/utils/getPriorityConfig.ts';


export const TaskColumnHeader = (
  { priority, amount } : TaskColumnHeaderI
) => {

  const { title } = getPriorityConfig(priority);
  
  return (
    <div className={styles['task-column-header']}>
      <div className={styles['task-column-header__content']}>
        <p className={styles['task-column-header__text']}>
          {title}
        </p>
        <div
        className={styles['task-column-header__label']}
        >
          { amount }
        </div>
      </div>
    </div>
  );
}