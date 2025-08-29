import styles from './styles.module.scss';

import { iconArrowLeft } from '@/shared/assets/icons/index.ts';

import { useOverlayActions } from '@/shared/lib/hooks/useOverlayActions.ts';

export const OpenTaskPanel = () => {
  const { showOverlayAction } = useOverlayActions();

  return (
    <div>
    <button 
    className={styles['btnArrow']}
    onClick={() => showOverlayAction(
      {
        type: 'create-task'
      }
    )}
    >
      <img 
      src={iconArrowLeft} 
      alt="стрелка для открытия панели"
      className={styles['arrowToShow']} 
      />
    </button>
    </div>
  );
}