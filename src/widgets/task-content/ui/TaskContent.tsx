//  импорт стилей
import styles from './TaskContent.module.scss';

// импорт типов
import { PriorityT } from '@/shared/types/task/index.ts';

//  импорт хуков
import { useMemo, useState } from 'react';

// 
import { filterTasks } from '@/shared/lib/utils/filterTasks.ts';

// импорт статических данных
import { LIST_TASK } from '@/shared/config/static-data.ts';

// импорт ui-компонентов
import { TaskCard } from '@/enteries/task-card/index.ts';
import { TaskTab } from '@/shared/ui/task-tab/index.ts';


// экспорт компонента
export const TaskContent = () => {

  const [ activeTab, setActiveTab ] = useState<PriorityT>('low');

  const filteredTask = useMemo(() => {
    return filterTasks({
      priority: activeTab
    }, LIST_TASK)
  },[activeTab])
  return (
    <div className={styles.container}>
    <div className={styles.tabs}>
      <TaskTab
      priority='low'
      onClick={() => setActiveTab('low')}
      isActive={activeTab === 'low'}
      />
      <TaskTab
      priority='medium'
      onClick={() => setActiveTab('medium')}
      isActive={activeTab === 'medium'}
      />
      <TaskTab
      priority='high'
      onClick={() => setActiveTab('high')}
      isActive={activeTab === 'high'}
      />
    </div>
    <div className={styles.content} key={activeTab}>
    {filteredTask.map((task,index) => {
      return (
        <TaskCard
        {...task}
        key={index}
        />
      );
    })}
  </div>
    </div>
  );
}