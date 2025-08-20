
// импорт стилей
import styles from './styles.module.scss';

// импорт типов
import { Task, TaskColumnI } from '@/shared/types/types.ts';

// импорт компонентов
import { TaskColumnHeader } from './TaskColumnHeader.tsx';
import { TaskCard } from '@/enteries/task-card/index.ts';

// импорт функций-помощников
import { filterTasks } from '@/shared/lib/utils/filterTasks.ts';


export const TaskColumn = (
  { priority, tasks } : TaskColumnI
) => {

  const filteredTasks: Task[] = filterTasks({ priority: priority }, tasks);

  return (
    <div className={`${styles['task-column']} flex-col flex gap-4`}>
      <TaskColumnHeader
      priority={priority}
      amount={filteredTasks.length}
      />
      {filteredTasks.map((task,index) => {
        return (
          <TaskCard
          {...task}
          key={index}
          />
        );
      })}
    </div>
  );
}