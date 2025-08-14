import styles from './UserLevelProgress.module.scss';

import { getCurrentLevel, getNextLevel, getProgressToNextLevel } from '../model/helpers.ts';

import { LevelProgressBar } from './LevelProgressBar.tsx';

import { UserLevelProgressProps} from '../model/types.ts';
import { LevelInfo } from './LevelInfo.tsx';



export const UserLevelProgress = (
  { points, levels } : UserLevelProgressProps
) => {

  const currentLevel = getCurrentLevel(points, levels);
  const nextLevel = getNextLevel(points, levels);
  const progressToNextLevel = getProgressToNextLevel(points, levels);

  return (
    <div className={styles.container}>
      <LevelProgressBar
      points={points}
      levels={levels}
      />
      <LevelInfo
      currentLevel={currentLevel}
      nextLevel={nextLevel}
      progressToNextLevel={progressToNextLevel}
      />
    </div>
  );
}