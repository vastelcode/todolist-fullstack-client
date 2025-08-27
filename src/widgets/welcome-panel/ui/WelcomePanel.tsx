import styles from './WelcomePanel.module.scss';


import { WelcomeHeader } from './WelcomeHeader.tsx';
import { WelcomeDescription } from './WelcomeDescription.tsx';
import { LevelSection } from './LevelSection.tsx';
import { DailyQuote } from './DailyQuote.tsx';

import { useOverlayActions } from '@/shared/lib/hooks/useOverlayActions.ts';


export const WelcomePanel = (
  { className, isMobile } : { className?: string, isMobile: boolean }
) => {

  // получаем экшен для скрытия затемнения
  const { hideOverlayAction } = useOverlayActions();

  return (
    <section
    className={`${styles.panel} flex flex-col gap-5 ${className}`}
    >
    {/* кнопка для закрытия меню на мобильных версиях */}
    {isMobile ? 
    <button 
    className={styles.btn}
    onClick={hideOverlayAction}
    >
      X
    </button>
    :
    null
    }
    <WelcomeHeader userName='Максим' />
    <WelcomeDescription/>
    <LevelSection points={400}/>
    <DailyQuote/>
    </section>
  );
}