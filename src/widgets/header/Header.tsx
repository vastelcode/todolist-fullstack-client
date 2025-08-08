import styles from './Header.module.scss';

import { SearchInput } from '@/features/search-input/ui/index.ts';
import { DateDisplay } from '@/features/date-display/ui/index.ts';
import { SwitchTheme } from '@/features/theme/ui/switch-theme/index.ts';
import { Logo } from '@/shared/ui/logo/index.ts';


export const Header = () => {
  return (
    <header className={styles.header}>
      <div 
      className={`${styles['header__content']} flex gap-10 items-center`}
      >
        <Logo/>
        <DateDisplay/>
        <SearchInput/>
        <SwitchTheme/>
      </div>
    </header>
  );
}