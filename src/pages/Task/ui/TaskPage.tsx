import styles from './TaskPage.module.scss';

import { TaskColumn } from '@/widgets/task-column/index.ts';
import { TaskPanel } from '@/widgets/task-panel/index.ts';

import { LIST_TASK } from '@/shared/config/static-data.ts';

export const TaskPage = () => {
  return (
    // основной контейнер компонента
    <div className={`${styles.taskboard} page`}>
      {/* основной контент */}
      <div className={`${styles['taskboard__content']} flex flex-col gap-8`}>
        <p className={`${styles.header}`}>Задачи</p>
        {/* оболочка для ограничения контента */}
        <div className={`${styles['taskboard__wrapper']}`}>
          <TaskColumn priority='low' tasks={LIST_TASK} />
          <TaskColumn priority='medium' tasks={LIST_TASK} />
          <TaskColumn priority='high' tasks={LIST_TASK} />
        </div>
      </div>
      {/* боковая панель */}
      <TaskPanel/>
    </div>
  );
};