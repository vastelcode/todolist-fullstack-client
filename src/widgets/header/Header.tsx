import styles from './Header.module.scss';

import { SearchInput } from '@/features/search-input/ui/index.ts';
import { DateDisplay } from '@/features/date-display/ui/index.ts';
import { SwitchTheme } from '@/features/theme/ui/switch-theme/index.ts';
import { DropdownMenu } from '@/features/dropdown-menu/index.ts';
import { Logo } from '@/shared/ui/logo/index.ts';

import { iconMenu } from '@/shared/assets/icons/index.ts';


export const Header = () => {
  return (
    <header className={styles.header}>
      <div 
      className={`${styles['header__content']} flex gap-10 items-center`}
      >
        <Logo/>
        {/* Блок будет виден только до достижения 556 px */}
        <div className={`${styles['responsive-wrapper']}`}>
        <SearchInput/>
        <DateDisplay/>
        <SwitchTheme/>
        </div>

        {/* компонент выпадющего меню. будет виден только при достижении 556 px */}
        <DropdownMenu 
        trigger={<img src={iconMenu} />}
        >
        <DateDisplay/>
        <SwitchTheme/>
        <SearchInput/>
        </DropdownMenu>
      </div>
    </header>
  );
}