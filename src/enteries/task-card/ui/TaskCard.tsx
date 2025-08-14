import styles from './TaskCard.module.scss';

import { TaskCardI } from '../model/types.ts';

import { iconSubtasks } from '@/shared/assets/icons/index.ts';


export const TaskCard = (
  {
    project,
    cover,
    header,
    text,
    date,
    subtasks,
    priority
  } : TaskCardI
) => {

  //  определяем цвет по приоритету задачи
  const color =
  priority === 'Высокий' ? '#D34141' :
  priority === 'Средний' ? '#F59E0B' : '#0ACF83';

  return (
    // основной контейнер
    <div className={styles.card}>
      {/* блок с тегом проекта */}
      <div className={styles['tag-project']}>
        {project}
      </div>
      <img 
      src={cover} 
      alt="обложка проекта" 
      className={styles.cover}
      />
      <p className={styles.header}>
        {header}
      </p>
      <p className={styles.text}>
        {text}
      </p>
      <div className={styles['date-display']}>
        {date}
      </div>
      <div className="flex justify-between">
        
      <div className="flex gap-2">
        <img src={iconSubtasks} alt="иконка подзадач" className={styles.icon} />
        <p className={styles['subtasks-text']}>
          {subtasks}
        </p>
        </div>

      <div 
      className={styles['tag-priority']}
      style={{
        backgroundColor: color
      }}
      >
        {priority}
      </div>



      </div>
    </div>
  );
}