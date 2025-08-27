import { selectThemeMode } from '@/shared/lib/selectors/theme-selectors.ts';

import { useSelector } from 'react-redux';

import { useThemeActions } from '@/shared/lib/hooks/useThemeActions.ts';



//  3. импортируем стили компонента
import styles from './Switch.module.scss';


export const SwitchTheme = () => {
  // 4. получаем текущую тему из хранилища
  const theme = useSelector(selectThemeMode);

  const { toggleThemeAction } = useThemeActions();


  return (
    <div
    className={`${styles.switch}`}
    onClick={ toggleThemeAction }
    >
      <div className={`${styles["switch__wrapper"]} ${theme === 'dark' ? styles["switch__wrapper--dark"] : styles["switch__wrapper--light"]}`}>

        <div className={`${styles["switch__circle"]} ${theme === 'dark' ? styles["switch__circle--dark"] : styles["switch__circle--light"]}`}>

        </div>


      </div>
    </div>
  );
}