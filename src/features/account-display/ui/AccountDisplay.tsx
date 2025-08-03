import styles from './AccountDisplay.module.scss';

export const AccountDisplay = () => {
  return (
    <div className={styles.display}>
      <p className={styles.name}>
        Иван Иванов
      </p>
      <p className={styles.username}>
        #ivanovtodo
      </p>
    </div>
  );
}