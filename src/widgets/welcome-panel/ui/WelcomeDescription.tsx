import { WELCOME_TEXTS } from '@/shared/config/static-data.ts';
import styles from './WelcomePanel.module.scss';


export const WelcomeDescription = () => {
  return (
    <div className="mb-5">
      <p className={styles['panel__text']}>
        {WELCOME_TEXTS.intro}
      </p>
      <p className={styles['panel__text']}>
        {WELCOME_TEXTS.systemDescription}
      </p>
    </div>
  );
}