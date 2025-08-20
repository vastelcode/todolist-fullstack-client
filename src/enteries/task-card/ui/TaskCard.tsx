// импорт стилей
import styles from './TaskCard.module.scss';

// импортируем типы и интерфейсы
import { TaskCardI } from '../model/types.ts';

// импортируем иконки
import { iconPoints } from '@/shared/assets/icons/index.ts';

// импорт функций-хелперов
import { formatDateToWord } from '@/shared/lib/utils/formatDate.ts';
import { getPriorityConfig } from '@/shared/lib/utils/getPriorityConfig.ts';


export const TaskCard = (
  {
    project,
    cover,
    header,
    text,
    date,
    points,
    priority
  } : TaskCardI
) => {

  //  определяем цвет и сообщение по приоритету задачи
  const {color, title} = getPriorityConfig(priority);


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
        {formatDateToWord(date)}
      </div>
      <div className="flex justify-between">
        
      <div className="flex gap-2">
        <img src={iconPoints} alt="иконка подзадач" className={styles.icon} />
        <p className={styles['points-text']}>
          {points}
        </p>
        </div>

      <div 
      className={styles['tag-priority']}
      style={{
        backgroundColor: color
      }}
      >
        {title}
      </div>
      </div>
    </div>
  );
}