import styles from './Tab.module.scss';

import { Link } from 'react-router-dom';

import { AppRoutes } from '@/app/providers/router/paths.ts';

interface TabI {
  icon: string;
  iconActive: string;
  to: AppRoutes;
  isActive: boolean;
}

export const NavigationTab = (
{
  icon,
  iconActive,
  to,
  isActive
} : TabI
) => {
  return (
    <Link to={to}>
    <div 
    className={`${styles['card']} ${isActive ? styles['card_active'] : ''}`}
    >
      <div className={styles['card__content']}>
        <img src={isActive ? iconActive : icon} alt="иконка раздела" className={styles['card__icon']}/>
      </div>
    </div>
    </Link>
  );
}