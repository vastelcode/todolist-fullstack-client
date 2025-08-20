import styles from './styles.module.scss';

export const EmptyTodayTasks = () => {
  return (
    <p className={styles.text}>
      На сегодня у вас нет задач. Можете добавить их в разделе "Задачи"
    </p>
  );
}