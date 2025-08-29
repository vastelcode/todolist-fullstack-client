
// импорт стилей
import styles from './TaskTab.module.scss';

// импорт типов
import { TaskTabProps } from '@/shared/types/task/index.ts';

// импорт хелперов
import { getPriorityConfig } from '@/shared/lib/utils/getPriorityConfig.ts';
import { filterTasks } from '@/shared/lib/utils/filterTasks.ts';

import { LIST_TASK } from '@/shared/config/static-data.ts';


export const TaskTab= (
  { priority,onClick, isActive } : TaskTabProps
) => {

  const { title } = getPriorityConfig(priority);

  const amount = filterTasks({priority: priority}, LIST_TASK).length;
  
  return (
    <div 
    className={`${styles.container} ${isActive ? styles['container_active'] : null}`}
    onClick={onClick}
    >
      <div className={styles['content']}>
        <p className={styles['text']}>
          {title}
        </p>
        <div
        className={styles['label']}
        >
          { amount }
        </div>
      </div>
    </div>
  );
}