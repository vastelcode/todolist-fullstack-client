import styles from './UserLevelProgress.module.scss';

import { getWidth } from '../model/helpers.ts';
import { UserLevelProgressProps } from '../model/types.ts';

export const LevelProgressBar = (
  { points, levels } : UserLevelProgressProps
) => {
  return (
    <>
      <div className="flex justify-between">
        {levels.map((level,index) => {
          return (
            <p 
            className={styles.levelText}
            key={index}
            >
              {level.name}
            </p>
          );
        })}
      </div>
        <div className={`${styles['bar-container']}`}>
    <div 
    className={styles['bar-active']}
    style={{
      width: getWidth(points)
    }}
    >
    <div className={`${styles.barEndpoints} mb-5`}>
      {levels.map((level) => {
        return (
          <div className={styles.endpoint} key={level.name}>
          </div>
        );
      })}
    </div>
    </div>
  </div>
    </>
  );
}