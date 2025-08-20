import { WelcomePanel } from '@/widgets/welcome-panel/index.ts';
import { TaskStatistics } from '@/widgets/task-statistics/index.ts';
import { TodayTasks } from '@/widgets/today-tasks/index.ts';

import { ProgressIndicatorCard } from '@/features/progress-indicator/index.ts';
import { OpenWelcomePanel } from '@/features/overlay/index.ts';

import { PROGRESS_DATA } from '@/shared/config/static-data.ts';


import styles from './DashboardPage.module.scss';




export const DashboardPage = () => {
  return (
    // компонент страницы
    <section className={`${styles.dashboard} page`}>
      {/* весь контент */}
      <div className={`${styles['dashboard__content']}`}>
        {/* оболочка с ограничением ширины контента */}
        <div className={`${styles['dashboard__wrapper']} flex flex-col gap-5`}>
          {/* АДАПТИВ: стрелка для открытия приветственной панели, начиная с 1439 px */}
          <OpenWelcomePanel/>
          {/* блок для отображения данных о выполненных задачах/проектах */}
        <div className={`${styles['wrapper__data']} flex gap-4`}>
          {PROGRESS_DATA.map((item, index) => {
            return (
              <ProgressIndicatorCard
              key={index}
              header={item.header}
              amount={item.amount}
              icon={item.icon}
              />
            );
          })}
        </div>

        {/* блок с активностью пользователя в разные периоды времени */}
        <TaskStatistics/>

        {/* блок с задачами на день */}

        <TodayTasks/>
        </div>
        
      </div>
      <WelcomePanel/>
    </section>
  );
};