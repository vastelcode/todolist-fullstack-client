import styles from './FormLoader.module.scss';

export const FormLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <span>Создание...</span>
    </div>
  );
};