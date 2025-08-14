import { LevelInfoProps } from '../model/types.ts';
import styles from './UserLevelProgress.module.scss';

export const LevelInfo = (
  { currentLevel, nextLevel, progressToNextLevel } : LevelInfoProps
) => {
  return (
    <div className='flex justify-between'>
    <p className={`${styles.text}`}>
        {currentLevel.description}
      </p>
      <p className={styles.text}>
        {
          nextLevel ?
          `${progressToNextLevel}` :
          `максимальный уровень`
        }
      </p>
    </div>
  );
}