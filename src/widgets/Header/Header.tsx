import styles from './Header.module.scss';

import { SearchInput } from '@/features/search-input/ui/index.ts';
import { Logo } from '@/shared/ui/logo/index.ts';
import { DateDisplay } from '@/features/date-display/ui/index.ts';


export const Header = () => {
  return (
    <header className={styles.header}>
      <div 
      className={`${styles['header__content']} flex justify-between items-center`}
      >
        <Logo/>
        <SearchInput/>
        <DateDisplay/>
      </div>
    </header>
  );
}