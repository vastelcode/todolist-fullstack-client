import styles from './TabForm.module.scss';
import { PriorityT } from '@/shared/types/task/index.ts';
import { getPriorityConfig } from '@/shared/lib/utils/getPriorityConfig.ts';

interface TabFormI {
  priority: PriorityT;
  active: PriorityT;
  onClick: () => void;
  disabled?: boolean;
}

export const TabForm = ({
  priority,
  active,
  onClick,
  disabled = false
}: TabFormI) => {
  const isActive = active === priority;
  const config = getPriorityConfig(priority);
  
  return (
    <div 
      className={`${styles.tab} ${disabled ? styles.tabDisabled : ''}`}
      onClick={disabled ? undefined : onClick}
      style={isActive ? {
        backgroundColor: config.color,
        color: 'white'
      } : {}}
    >
      {config.title}
    </div>
  );
};