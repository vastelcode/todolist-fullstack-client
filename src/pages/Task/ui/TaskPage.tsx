// импорт стилей
import styles from './TaskPage.module.scss';

import { TaskPanel } from '@/widgets/task-panel/index.ts';
import { TaskContent } from '@/widgets/task-content/index.ts';
import { OpenTaskPanel } from '@/features/overlay/index.ts';



export const TaskPage = () => {

  return (
    // основной контейнер компонента
    <div className={`${styles.taskboard} page`}>
      {/* основной контент */}
      <div className={`${styles['taskboard__content']} flex flex-col gap-8`}>
      <div className={styles['wrapper-responsive']}>
        <OpenTaskPanel/>
        <p className={`${styles.header}`}>Задачи</p>
        </div>
        {/* оболочка для ограничения контента */}
        <TaskContent/>
      </div>
      {/* боковая панель */}
      <TaskPanel isMobile={false}/>
    </div>
  );
};