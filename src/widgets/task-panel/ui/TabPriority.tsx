import styles from './styles.module.scss';

import { PriorityT } from '@/shared/types/types.ts';

import { getPriorityConfig } from '@/shared/lib/utils/getPriorityConfig.ts';

import { MouseEventHandler } from 'react';

interface TabPriorityI {
  priority: PriorityT;
  active: PriorityT;
  onClick: MouseEventHandler;
}

export const TabPriority = (
  { priority, active, onClick } : TabPriorityI
) => {
  return (
  <div 
  className={`${styles.tab}`}
  onClick={onClick}
  style={active === priority ? {
    backgroundColor: getPriorityConfig(priority).color,
    color: 'white'
  } : {}}
  >
    {getPriorityConfig(priority).title}
  </div>
  );
}