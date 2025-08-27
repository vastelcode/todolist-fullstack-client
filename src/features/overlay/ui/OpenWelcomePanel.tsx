//  импорт стилей
import styles from './styles.module.scss';

// импорт иконок
import { iconArrowLeft } from '@/shared/assets/icons/index.ts';

// импорт хуков
import { useOverlayActions } from '@/shared/lib/hooks/useOverlayActions.ts';


// импорт необходимых модулей
import { useState } from 'react';





export const OpenWelcomePanel = () => {


  const { showOverlayAction } = useOverlayActions();


  return (
    <div>
    <button 
    className={styles['btnArrow']}
    onClick={() => showOverlayAction(
      {
        type: 'welcome-panel'
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