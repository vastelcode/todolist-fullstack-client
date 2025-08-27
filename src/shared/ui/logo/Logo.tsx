import styles from './Logo.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store/index.ts';


interface LogoI {
  className?: string;
};

import { iconLogoDark, iconLogoLight } from '@/shared/assets/icons/index.ts';

export const Logo = ({ className } : LogoI) => {

  const theme = useSelector((state: RootState) => state.theme.mode);

  const logo =
  theme === 'light' ? iconLogoLight
  : iconLogoDark;

  return (
    <img src={logo} alt="логотип ChronoFlow" className={`${styles.logo} ${className}`}/>
  );
}