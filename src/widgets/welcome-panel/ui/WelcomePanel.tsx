import styles from './WelcomePanel.module.scss';

import { WelcomeHeader } from './WelcomeHeader.tsx';
import { WelcomeDescription } from './WelcomeDescription.tsx';
import { LevelSection } from './LevelSection.tsx';
import { DailyQuote } from './DailyQuote.tsx';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store/index.ts';

export const WelcomePanel = () => {

  const overlay = useSelector((state: RootState) => state.overlay.isVisible);

  return (
    <section
    className={`${styles.panel} flex flex-col gap-5 ${overlay ? styles['panel_active'] : ''}`}
    >
    <WelcomeHeader userName='Максим' />
    <WelcomeDescription/>
    <LevelSection points={400}/>
    <DailyQuote/>
    </section>
  );
}