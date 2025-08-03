import styles from './Logo.module.scss';

interface LogoI {
  className?: string;
};

import { iconLogo } from '@/shared/assets/icons/index.ts';

export const Logo = ({ className } : LogoI) => {
  return (
    <img src={iconLogo} alt="логотип ChronoFlow" className={`${styles.logo} ${className}`}/>
  );
}