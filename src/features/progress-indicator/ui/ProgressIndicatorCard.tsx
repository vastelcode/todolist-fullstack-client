import styles from './ProgressIndicatorCard.module.scss';


interface ProgressDataI {
  icon: string;
  header: string;
  amount: number;
}

export const ProgressIndicatorCard = (
  {icon, header, amount} : ProgressDataI
) => {
  return (
    <div className={styles.card}>

      <div className={styles.content}>
        <div className={styles.header}>

          <div className={styles.circle}>
            <img src={icon} alt="иконка статистики" className={styles.icon} />
          </div>
          <p className={styles.text}>
            {header}
          </p>          
        </div>
        <p className={styles.amount}>
          {amount}
        </p>
      </div>

    </div>
  );
}