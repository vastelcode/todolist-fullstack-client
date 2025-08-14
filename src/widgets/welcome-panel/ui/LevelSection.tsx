import { UserLevelProgress } from "@/features/user-level-progress/index.ts";
import { WELCOME_TEXTS, LEVEL_CONFIG } from "../model/welcome-content.ts";
import styles from './WelcomePanel.module.scss';

export const LevelSection = ( { points } : { points: number } ) => {
  return (
    <div className="flex flex-col  gap-5">
      <p className={styles['panel__header']}>
        {WELCOME_TEXTS.levelTitle}
      </p>
      <p className={styles['panel__text']}>
        {WELCOME_TEXTS.levelDescription}
      </p>
      <UserLevelProgress 
      points={points}
      levels={LEVEL_CONFIG}
      />
    </div>
  );
}