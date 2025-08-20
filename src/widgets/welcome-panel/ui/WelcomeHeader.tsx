import { WELCOME_TEXTS } from '@/shared/config/static-data.ts';
import styles from './WelcomePanel.module.scss';


export const WelcomeHeader = ({ userName } : { userName: string }) => {
  return (
    <p className={styles['panel__header']}>
      {WELCOME_TEXTS.greeting(userName)}
    </p>
  );
}