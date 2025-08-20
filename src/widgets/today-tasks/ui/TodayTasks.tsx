// импорт стилей
import styles from './styles.module.scss';

// импорт хуков
import { useRef } from 'react';

// импорт вспомогательных функций
import { getDate } from '@/shared/lib/utils/getDate.ts';
import { filterTasks } from '@/shared/lib/utils/filterTasks.ts';

// импорт статических данных
import { LIST_TASK } from '@/shared/config/static-data.ts';

// импорт компонентов
import { TaskCard } from '@/enteries/task-card/index.ts';
import { Slider } from './Slider.tsx';
import { EmptyTodayTasks } from './EmptyTodayTasks.tsx';

export const TodayTasks = () => {

  // получаем текущую дату в формате DD.MM.YYYY
  const { localDate } = getDate('point');

  // создаём крючок
  const wrapperRef = useRef(null);

  // фильтруем задачи

  const filteredTasks = filterTasks( {date:localDate} , LIST_TASK);

  return (
    // основной контнейнер компонента
    <section
    className={styles.container}
    >
      {/* шапка секции */}
      <div className="flex justify-between">
      <p className={styles.header}>
        Задачи на {localDate}
      </p>
      {/* слайдер для списка задач */}
      <Slider element={wrapperRef} />
      </div>
      {/* список задач */}
      <div className={styles.wrapper} ref={wrapperRef}>
        {
          filteredTasks.length ? 
          filteredTasks.map((task, index) => {
            return (
              <TaskCard
              {...task}
              key={index}
              />
            );
          }) : <EmptyTodayTasks/>
        }
      </div>
    </section>
  );
}