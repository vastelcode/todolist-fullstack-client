import styles from './styles.module.scss';

import { useRef } from 'react';

import { getDate } from '@/shared/lib/utils/getDate.ts';

import { DATA_TODAY_TASKS } from '../model/static-data.ts';

import { TaskCard } from '@/enteries/task-card/index.ts';

import { Slider } from './Slider.tsx';

export const TodayTasks = () => {

  const today = getDate('point');

  const wrapperRef = useRef(null);

  return (
    // основной контнейнер компонента
    <section
    className={styles.container}
    >
      {/* шапка секции */}
      <div className="flex justify-between">
      <p className={styles.header}>
        Задачи на {today.localDate}
      </p>
      <Slider element={wrapperRef} />
      </div>
      <div className={styles.wrapper} ref={wrapperRef}>
        {DATA_TODAY_TASKS.map((task, index) => {
          return (
            <TaskCard
            project={task.project}
            cover={task.cover}
            header={task.header}
            text={task.text}
            date={task.date}
            subtasks={task.subtasks}
            priority={task.priority}
            key={index}
            />
          );
        })}
      </div>
    </section>
  );
}