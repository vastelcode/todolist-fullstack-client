import styles from './Overlay.module.scss';

import { useSelector } from 'react-redux';

import { selectOverlay} from '@/shared/lib/selectors/overlay-selectors.ts';

import { WelcomePanel } from '@/widgets/welcome-panel/index.ts';

import { TaskDetail } from '@/widgets/task-detail/index.ts';

import { TaskPanel } from '@/widgets/task-panel/index.ts';

export const Overlay = () => {

  const { isVisible, type }= useSelector(selectOverlay);

  const content =
  type === 'welcome-panel' ? <WelcomePanel className={styles.panel} isMobile={true}/>
  :
  type === 'task-detail' ? <TaskDetail/>
  :
  type === 'create-task' ? <TaskPanel
  className={styles.panel} isMobile={true}
  /> : null;

  console.log(content)


  return (
    <div 
    className={`${styles.overlay} ${isVisible ? styles['overlay_active'] : ''}`}
    >
      {content}
    </div>
  );
}